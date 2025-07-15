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
        </div>
      </div>
    </div>
    <p class="server-description">{{ server.description }}</p>
    <div class="server-links">
      <a :href="server.link" target="_blank" class="server-link">浏览网站</a>
      <span v-if="server.ip" class="server-ip">地址: {{ server.ip }}</span>
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
      serverVersions: []
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

.search-input {
  flex: 1;
  min-width: 150px;
  padding: 0.5rem 1rem;
  border: 1px solid var(--border-color, #ddd);
  border-radius: 4px;
  background-color: var(--bg-color);
  color: var(--text-color);
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

.server-card {
  background-color: var(--vp-c-bg-alt);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease-in-out, border-color 0.3s ease, color 0.3s ease;
  border: var(--server-card-border) !important;
  color: var(--server-card-text) !important;
}
.server-card:hover {
  transform: translateY(-5px);
}
.server-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.server-card h3 {
  color: var(--server-card-text) !important;
}
.server-type {
  color: var(--server-card-text) !important;
  background-color:rgba(122, 122, 122, 0.1);
  padding: 0 0.5rem;
  border-radius: 5px;
  font-size: 0.8rem;
  font-weight: normal;
}
.server-badge {
  color: var(--server-card-text) !important;
  background-color:rgba(0, 255, 170, 0.1);
  padding: 0 0.5rem;
  border-radius: 5px;
  font-size: 0.8rem;
  font-weight: normal;
}
.server-icon img {
  width: 48px;
  height: 48px;
  border-radius: 5px;
  object-fit: cover;
}

.server-title {
  flex: 1;
}

.server-title h3 {
  margin: 0 0 0.25rem 0;
  font-size: 1.1rem;
}

.server-tags {
  display: flex;
  gap: 0.5rem;
}
.server-description {
  color: var(--server-card-text) !important;
  margin-bottom: 1rem;
}
.server-links {
  display: flex;
  gap: 1rem;
  align-items: center;
}
.server-link {
  color: #3b82f6;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid #3b82f6;
  border-radius: 0.25rem;
}
.server-ip {
  color: var(--server-card-text) !important;
}
</style>