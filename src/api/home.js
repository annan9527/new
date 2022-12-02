import request from "@/utils/request";
// 获取顶部信息
export const findBanner = () => request({
  url: '/api/index'
})

// export const deleteid = (id) => request({
//   url: `/company/department/${id}`,
//   method: 'delete'
// })

// // 新增组织架构
// export const addpart = (data) => request({
//   url: '/company/department',
//   method: 'post',
//   data
// })
