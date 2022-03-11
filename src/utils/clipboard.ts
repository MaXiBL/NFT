import { ElMessage } from 'element-plus'
export const clipboardSuccess = () =>
  ElMessage({
    message: 'Copy successfully',
    type: 'success',
    duration: 1500
  })

export const clipboardError = () =>
  ElMessage({
    message: 'Copy failed',
    type: 'error'
  })
               