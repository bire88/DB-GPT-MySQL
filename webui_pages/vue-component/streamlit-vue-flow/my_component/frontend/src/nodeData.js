import titleContentNode from './node/title-content-node';
import agentGroupNode from './node/agent_group_node';
import Edge from './util/edge';

// 下: [0,1]
// 上: [0,-1]
// 右: [1,0]
// 左: [-1,0]

const data = {
  nodes: [
    {
      isRoot: true,
      id: 'A',
      title: '初始化专家角色',
      content: '',
      render: titleContentNode,
      top: 20,
      left: 120,
      endpoints: [
        {
          id: 'bottom',
          orientation: [0,1]
        }
      ]
    },
    {
      id: 'B',
      isRoot: true,
      title: '初始化诊断报告',
      content: '',
      top: 150,
      left: 120,
      render: titleContentNode,
      endpoints: [
        {
          id: 'top',
          orientation: [0,-1]
        },
        {
          id: 'bottom',
          orientation: [0,1]
        }
      ]
    },
    {
      id: 'C',
      title: '根据异常分配诊断专家',
      content: '',
      top: 280,
      left: 120,
      render: titleContentNode,
      endpoints: [
        {
          id: 'top',
          orientation: [0,-1]
        },
        {
          id: 'bottom',
          orientation: [0,1]
        }
      ]
    },
    {
      id: 'D',
      title: '专家诊断',
      content: '',
      top: 410,
      left: 50,
      render: agentGroupNode,
      endpoints: [
        {
          id: 'top',
          orientation: [0,-1]
        },
        {
          id: 'bottom',
          orientation: [0,1]
        }
      ]
    },
    {
      id: 'E',
      title: '圆桌讨论',
      content: '',
      top: 610,
      left: 120,
      render: titleContentNode,
      endpoints: [
        {
          id: 'top',
          orientation: [0,-1]
        },
        {
          id: 'bottom',
          orientation: [0,1]
        }
      ]
    },
    {
      id: 'F',
      title: '报告生成',
      content: '',
      top: 740,
      left: 120,
      render: titleContentNode,
      endpoints: [
        {
          id: 'top',
          orientation: [0,-1]
        }
      ]
    },
  ],
  edges: [
    {
      id: '1',
      source: 'bottom',
      target: 'top',
      sourceNode: 'A',
      targetNode: 'B',
      type: 'endpoint',
      Class: Edge
    },
    {
      id: '2',
      source: 'bottom',
      target: 'top',
      sourceNode: 'B',
      targetNode: 'C',
      type: 'endpoint',
      Class: Edge
    },
    {
      id: '3',
      source: 'bottom',
      target: 'top',
      sourceNode: 'C',
      targetNode: 'D',
      type: 'endpoint',
      Class: Edge
    },
    {
      id: '4',
      source: 'bottom',
      target: 'top',
      sourceNode: 'D',
      targetNode: 'E',
      type: 'endpoint',
      Class: Edge
    },
    {
      id: '5',
      source: 'bottom',
      target: 'top',
      sourceNode: 'E',
      targetNode: 'F',
      type: 'endpoint',
      Class: Edge
    }
  ]
};

export default data;
