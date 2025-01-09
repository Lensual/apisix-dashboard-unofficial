export default {
  name: '名称',
  namePlaceholder: '请输入上游服务的名称',
  desc: '描述',
  descPlaceholder: '请输入上游服务的描述',
  upstreamType: '上游类型',
  upstreamTypeInner: {
    nodes: '节点',
    discovery: '服务发现',
  },
  nodes: '目标节点',
  addNode: '新建节点',
  removeNode: '删除节点',
  nodesInner: {
    host: '主机名',
    hostPlaceholder: '主机名或 IP',
    port: '端口',
    portPlaceholder: '端口',
    weight: '权重',
    weightPlaceholder: '权重',
  },
  discovery_type: '服务发现类型',
  discoveryTypeInner: {
    dns: 'dns',
    consul: 'consul',
    consul_kv: 'consul_kv',
    nacos: 'nacos',
    eureka: 'eureka',
    kubernetes: 'kubernetes',
  },
  service_name: '服务名称',
  service_namePlaceholder: '请输入服务名称',
};