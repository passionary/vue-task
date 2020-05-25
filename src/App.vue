<template>
  <div id="app">
    <h2 class="text-center mb-5">Учет заработной платы</h2>
    <div class="alert alert-danger w-75 mx-auto" v-if="error">{{error}}</div>
    <form action="" class="w-75 mx-auto">
      <input type="text" class="form-control" v-model="sname" required placeholder="Фамилия">
      <input type="text" class="form-control" v-model="name" required placeholder="Имя">
      <input type="text" class="form-control" v-model="mname" required placeholder="Отчество">
      <input type="date" class="form-control" v-model="date" required placeholder="Дата выдачи зарплаты">
      <input type="text" class="form-control" v-model="count" required placeholder="Количество отработанных дней">
      <input type="text" class="form-control" v-model="salary" required placeholder="Размер заработной платы сотрудника">
      <input type="submit" class="form-control" value="Добавить" @click.prevent="addToList">
    </form>
    <p class="text-right">Total: {{total}}</p>
    <table class="table table-bordered" style="width:84%;margin:45px auto">
      <thead>
        <th>Порядковый номер</th>
        <th>Ф.И.О.</th>
        <th>Дата выдачи зарплаты</th>
        <th>Количество отработанных дней</th>
        <th>Сумма заработной платы сотрудника без налоговых отчислений</th>
        <th>Сумма заработной платы сотрудника с налоговыми отчислениями (-15%)</th>
      </thead>
      <tbody>
        <tr v-for="(elem,index) in list" :key="index">
          <td v-for="(val,index) in elem" :key="index">
            <div class="d-flex justify-content-between">
              <p>{{val}}</p>              
            </div>
          </td>
          <button class="btn" @click="removeFromList(elem.id)">&times;</button>
        </tr>        
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      id:1,
      name:'',
      sname:'',
      mname:'',
      date:'',
      error:'',
      count:'',
      salary:'',
      total:0,
      list:[]
    }
  },
  methods:{
    addToList(){
      if(!this.name || !this.sname || !this.mname || !this.date || !this.count || !this.salary) {
        this.error = 'some error'
        return
      }
      const data = {
        id:this.id,
        fullname:this.sname + this.name + this.mname,
        date:this.date,
        count:this.count,
        salary:this.salary,
        salaryWithPer:this.salary - this.salary * 0.15
      }
      this.total = parseInt(this.total) + parseInt(this.salary)
      this.list.push(data)
    },
    removeFromList(id){
      const order = this.list.findIndex(e => e.id == id)
      this.total = parseInt(this.total) - parseInt(this.list[order].salary)
      this.list.splice(order,1)
    }
  },
  mounted(){    
  }  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
