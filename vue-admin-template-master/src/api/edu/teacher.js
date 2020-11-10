import request from '@/utils/request'

export default{
    getTeacherListPage(current,limit,teacherQuery){
        return request({
        //   url: '/eduservice/user/pageTeacherCondition/'+current+'/'+limit,
          url: `/eduservice/teacher/pageTeacherCondition/${current}/${limit}`,
          method: 'post',
          //data表示把对象转换json进行传递到接口里面
          data: teacherQuery
        })
    },
    //删除讲师
    deleteTeacherId(id){
        return request({
        //   url: '/eduservice/user/pageTeacherCondition/'+current+'/'+limit,
          url: `/eduservice/teacher/${id}`,
          method: 'delete'
        })
    },
    //添加讲师
    addTeacher(teacher){
        return request({
        //   url: '/eduservice/user/pageTeacherCondition/'+current+'/'+limit,
          url: `/eduservice/teacher/addTeacher`,
          method: 'post',
          data: teacher
        })
    },
    //根据id查询讲师方法
    getTeacherInfo(id){
      return request({
        //   url: '/eduservice/user/pageTeacherCondition/'+current+'/'+limit,
          url: `/eduservice/teacher/getTeacher/${id}`,
          method: 'post'
        })
    },
    //修改讲师
    updateTeacherInfo(teacher){
      return request({
          url: `/eduservice/teacher/updateTeacher`,
          method: 'post',
          data : teacher
        })
    }
}
