---
title: 成员服务器
layout: page
---

<div class="page-container">
  <h1 class="page-title">成员服务器列表</h1>
  <div class="filter-container">
    <input type="text" v-model="searchQuery" placeholder="搜索服务器名称..." class="search-input">
    <select v-model="selectedType" class="filter-select">
      <option value="">所有类型</option>
      <option v-for="type in serverTypes" :value="type">{{ type }}</option>
    </select>
    <select v-model="selectedVersion" class="filter-select">
      <option value="">所有版本</option>
      <option v-for="version in serverVersions" :value="version">{{ version }}</option>
    </select>
  </div>
  <div class="server-list" v-if="filteredServers.length > 0">
   <div v-for="server in filteredServers" :key="server.id" class="server-card">
    <div class="server-header">
      <div class="server-icon">
        <img v-if="typeof server.icon === 'string'" :src="server.icon" :alt="server.name" width="48" height="48">
        <img v-else :src="server.icon.src" :alt="server.icon.alt || server.name" :width="server.icon.width || 48" :height="server.icon.height || 48">
      </div>
      <div class="server-title">
        <h3>{{ server.name }}</h3>
        <div class="server-tags">
          <span class="server-type">{{ server.type }}</span>
          <span class="server-badge">{{ server.version }}</span>
          <span class="server-status" :class="{
            'checking': serverStatus[server.id]?.checking,
            'online': serverStatus[server.id]?.online,
            'offline': !serverStatus[server.id]?.online && !serverStatus[server.id]?.checking
          }">{{
            serverStatus[server.id]?.checking ? '检测中' :
                      serverStatus[server.id]?.online ? `在线: ${serverStatus[server.id]?.players?.online || 0}人` : '离线'
          }}</span>
          <span v-if="!server.bedrock && serverStatus[server.id]?.latency" class="server-latency">{{ serverStatus[server.id].latency }}ms</span>
        </div>
      </div>
    </div>
    <p class="server-description">{{ server.description }}</p>
    <div class="server-links">
      <span v-if="server.ip && !server.hideIp" class="server-ip">{{ server.ip }}</span>
      <a :href="server.link" target="_blank" class="server-link">点击查看</a>
    </div>
  </div>
</div>
   <div v-else class="no-results">
    没有找到匹配的服务器
  </div>
</div>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      selectedType: '',
      selectedVersion: '',
      servers: [],
      serverTypes: [],
      serverVersions: [],
      serverStatus: {},
    }
  },

  methods: {
    async fetchServerStatus(server) {
      const { ip, bedrock } = server;
      if (!ip) return { online: false };
      try {
        const baseUrl = bedrock ? 'https://yun.tbedu.top:16666/bedrock/3/' : 'https://yun.tbedu.top:16666/3/';
        const response = await fetch(`${baseUrl}${encodeURIComponent(ip)}`);
        return await response.json();
      } catch (error) {
        console.error('获取服务器状态失败:', error);
        return { online: false };
      }
    },
    async updateServerStatus(server) {
      if (server.ip) {
        // 初始化状态为检测中
        this.serverStatus[server.id] = { checking: true };
        
        try {
          // 设置48秒超时
          const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject(new Error('timeout')), 48000);
          });
          
          const status = await Promise.race([
            this.fetchServerStatus(server),
            timeoutPromise
          ]);
          
          // API成功返回，清除检测中状态
          status.checking = false;
          this.serverStatus[server.id] = status;
        } catch (error) {
          // 错误或超时状态
          this.serverStatus[server.id] = { online: false, checking: false };
        }
      }
    }
  },
  computed: {
    filteredServers() {
      return this.servers.filter(server => {
        const matchesSearch = server.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        const matchesType = this.selectedType ? server.type === this.selectedType : true
        const matchesVersion = this.selectedVersion ? server.version === this.selectedVersion : true
        return matchesSearch && matchesType && matchesVersion
      })
    }
  },
  mounted() {
    // 从数据文件加载服务器列表
    import('../.vitepress/data/servers').then(module => {
      // 按ID排序服务器列表
      this.servers = module.servers.sort((a, b) => Number(a.id) - Number(b.id))
      // 提取唯一的类型和版本用于筛选选项
      this.serverTypes = [...new Set(this.servers.map(s => s.type))]
      this.serverVersions = [...new Set(this.servers.map(s => s.version))]
      this.servers.forEach(server => this.updateServerStatus(server))
    })
  }
}
</script>

<style scoped>
.page-container {
  max-width: 1200px;
  margin: 70px auto 0;
  padding: 0 1rem;
}

.page-title {
  text-align: center;
  color: var(--text-color);
  margin-bottom: 2rem;
  font-size: 2rem;
}

.filter-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: var(--bg-color);
  border-radius: 8px;
}

.filter-select {
  padding: 0.5rem 1rem;
  border: 1px solid var(--border-color, #ddd);
  border-radius: 4px;
  background-color: var(--bg-color);
  color: var(--text-color);
  min-width: 120px;
}

.no-results {
  text-align: center;
  padding: 3rem;
  color: var(--text-color);
  font-size: 1.1rem;
}

.server-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin: 2rem 0;
}

@media (max-width: 1200px) {
  .server-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .server-list {
    grid-template-columns: 1fr;
  }
}
:root {
  --server-card-border: 1px solid var(--vp-c-divider);
  --server-card-text: rgb(103, 103, 108);
}

html.dark {
  --server-card-border: 1px solid var(--vp-c-divider-dark);
  --server-card-text: rgb(152, 152, 159);
}

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f8f9fa;
  color: #212529;
  line-height: 1.6;
  padding: 0;
}

.page-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}


        
.search-input {
  flex: 1;
  min-width: 200px;
  padding: 0.8rem 1.2rem;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #f8f9fa;
  transition: all 0.3s ease;
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.03);
}

.search-input:focus {
  outline: none;
  border-color: #4299e1;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.15),
      inset 0 2px 4px rgba(0,0,0,0.05);
}

.filter-select {
  padding: 0.8rem 1.2rem;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #f8f9fa;
  color: #495057;
  min-width: 150px;
  transition: all 0.3s ease;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%236c757d' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  }

.filter-select:focus {
  outline: none;
  border-color: #4299e1;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.15);
}

.server-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.no-results {
  text-align: center;
  padding: 3rem;
  color: #6c757d;
  font-size: 1.1rem;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

.no-results h3 {
  margin-bottom: 1rem;
  color: #495057;
}

.server-card {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 1.75rem;
  box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-top: 3px solid #4299e1;
  }

.server-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, #6d28d9, #4c51bf, #3182ce);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease-out;
}

.server-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.15);
}

.server-card:hover::before {
  transform: scaleX(1);
}

.server-header {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
}

.server-icon {
  width: 65px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  background: linear-gradient(135deg, #f0f8ff, #e6f7ff);
  padding: 0.3rem;
  box-shadow: 0 4px 6px rgba(66, 153, 225, 0.2);
  flex-shrink: 0;
}

.server-icon img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.server-title h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.35rem;
  color: #2d3748;
  font-weight: 700;
}

.server-tags {
  display: flex;
  gap: 0.3rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
}

.server-type, .server-badge {
  padding: 0.1rem 0.4rem;
  border-radius: 5px;
  font-size: 0.8rem;
  font-weight: 500;
  height: 1.6rem;
}

.server-type {
  background-color: rgba(123, 97, 255, 0.15);
  color: #6d28d9;
}

.server-badge {
  background-color: rgba(18, 184, 134, 0.15);
  color: #0c925a;
}

.server-status {
  display: inline-block;
  padding: 0.1rem 0.4rem;
  border-radius: 5px;
  font-size: 0.8rem;
  font-weight: 500;
  height: 1.6rem;
}

.server-status.online {
  background-color: rgba(18, 184, 134, 0.15);
  color: #0c925a;
}

.server-status.offline {
  background-color: rgba(239, 68, 68, 0.15);
  color: #ef4444;
}

.server-status.checking {
  background-color: rgba(245, 158, 11, 0.15);
  color: #c2410c;
}

.server-latency {
  display: inline-block;
  padding: 0.1rem 0.4rem;
  border-radius: 5px;
  font-size: 0.8rem;
  font-weight: 500;
  height: 1.6rem;
  background-color: rgba(18, 184, 134, 0.15);
  color: #0c925a;
}

.server-description {
  color: #4a5568;
  margin-bottom: 1.75rem;
  flex-grow: 1;
  font-size: 0.98rem;
  line-height: 1.7;
}

.server-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.server-link {
  color: #ffffff;
  text-decoration: none;
  padding: 0.7rem 1.4rem;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
  text-align: center;
  background: linear-gradient(135deg, #4299e1, #3182ce);
  width: 100%;
  box-shadow: 0 4px 6px rgba(66, 153, 225, 0.3);
}

.server-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(66, 153, 225, 0.4);
  background: linear-gradient(135deg, #3182ce, #2c6fb0);
}

.server-ip {
  color: #718096;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  background-color: #edf2f7;
  border-radius: 8px;
  width: 100%;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  }

@media (max-width: 900px) {
  .server-list {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
}
            
  .server-card {
    padding: 1.5rem;
  }
}

@media (max-width: 768px) {
  .filter-container {
    flex-direction: column;
  }
            
  .search-input, .filter-select {
    width: 100%;
  }
            
  .server-list {
    grid-template-columns: 1fr;
  }
            
  .server-links {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .server-header {
    flex-direction: column;
    text-align: center;
  }
            
  .server-tags {
    justify-content: center;
  }
            
  .page-title {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
}
</style>
