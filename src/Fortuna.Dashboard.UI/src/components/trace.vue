<template>
  <div>
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item> / Trace</a-breadcrumb-item>
    </a-breadcrumb>

    <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">

      <a-row class="trace-title">
        <a-col :span="24">

            <span class="tag">Start</span> 
            <a-tag>2021-03-11 18:19:43</a-tag>

            <span class="tag">Duration</span> 
            <a-tag>62548 ms</a-tag>

            <span class="tag">Services</span> 
            <a-tag>6</a-tag>

             <span class="tag">Spans</span> 
             <a-tag>6</a-tag>

              <span class="tag">Errors</span> 
              <a-tag>1</a-tag> 

        </a-col>
      </a-row>

      <a-table class="trace-table" :pagination="false" :bordered="true" size="small" :columns="columns" :data-source="data" :defaultExpandAllRows="true"> 

               <span slot="timeline" slot-scope="timeline">
                   <a-progress  :strokeWidth=4  :successPercent=5 :percent=timeline></a-progress>
               </span>

                <span slot="timeline-title"><a-icon type="smile-o" /> Name</span>

      </a-table>

    </div>
  </div>
</template>

<script>

const columns = [
  {
    title: 'Span',
    dataIndex: 'span',
    key: 'span',
    width:'30%'
  },
  {
    title: 'Service',
    dataIndex: 'service',
    key: 'service',
    width:'10%'
  },
   {
    title: 'Cost (ms)',
    dataIndex: 'cost',
    key: 'cost',
    width:'10%'
  },
  {
    slots: { title: 'timeline-title' },
    dataIndex: 'timeline',
    key: 'timeline',
    scopedSlots: { customRender: 'timeline' }
  }
];

const data = [
  {
    key: 1,
    span: '/User/Login',
    service: "User",
    cost: 15,
    timeline: 30,
    children: [
      {
        key: 11,
        span: '/User/Check',
        service: "User",
        cost: 14,
        timeline: 50
      }
    ],
  } 
];  

export default {
  data() {
    return {
      collapsed: false,
      data,
      columns 
    };
  },
};
</script>

<style>

.trace-title .tag{  
    font-weight: 700px;  
}  
 

.trace-table {

    margin-top: 20px;  

}  

.trace-table td{

    font-size: 12px;

}

.ant-progress-bg{
    border-radius: 0px !important;
}

.ant-progress-success-bg{ 
    background-color: #f5f5f5;  
    border-radius: 0px !important;
}


.trace-title .ant-tag{
  
   margin-right: 16px;
   margin-left: 2px;
  
}

</style>
