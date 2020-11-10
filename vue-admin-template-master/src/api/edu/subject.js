import request from '@/utils/request'

export default{
    //课程分类列表
    getSubjectList(){
        return request({
        //   url: '/eduservice/user/pageTeacherCondition/'+current+'/'+limit,
          url: `/eduservice/subject/getAllSubject`,
          method: 'get'
          //data表示把对象转换json进行传递到接口里面
        })
    },
    
}
