<template>
    <div >

        <div id="firstGroupHolder" class="container">
            <div class="box">
              <Upvote :id="'a'+y1" groupName="getGroupOne" tgl="toggleG1" v-for="(x1,y1) in a" :key="'FirstSet'+y1" />
            </div>
            <button @click='submit(1)'></button>
        </div>

        <div id="SecondGroupHolder" class="container">
          <div class="box">
            <Upvote :id="'a'+y2" groupName="getGroupTwo"  tgl="toggleG2" v-for="(x2,y2) in b" :key="'SecSet'+y2" />
          </div>
            <button @click='submit(2)'></button>
        </div>

        <div id="ThirdGroupHolder" class="container">
          <div class="box">
            <Upvote :id="'a'+y3" groupName="getGroupThree" tgl="toggleG3"  v-for="(x3,y3) in c" :key="'TrdSet'+y3" />
          </div>
            <button @click='submit(3)'></button>
        </div>
    </div>
</template>

<script>
    import { reactive} from 'vue'
    import Upvote from '../components/Upvote/Upvote.vue'
         
export default {
    setup() {
        let a = reactive([]);
        let b = reactive([]);
        let c = reactive([]);

        const submit = (x) => {

            switch (x)
            {
              case  1 : a.push({}); break;
              case  2 : b.push({}); break;
              case  3 : c.push({}); break;
            }
        };

        return { submit, a,b,c };
    },
    components: { Upvote }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 1rem;
}
.box {
  border: 2px solid #cdcdcd;
  border-radius: 15px;
  display: flex;
  flex-direction: row ;
  flex-wrap:wrap;
  height: 4rem;
  width: 30rem;
  padding: 10px;
}
button {
  width: 3.5rem;
  height: 3.5rem;
  margin-left: 1rem;
  border: none;
  border-radius: 0.75rem;
  background-color: #F4F6F8;
  background-image: url("../assets/add-filled.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 70%;
}
</style>