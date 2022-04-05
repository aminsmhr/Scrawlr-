<template>
        <div :class="{items: true, selected : groupValue ,  notselected : !groupValue }" @click="alter">
          <div class="icon"></div>
        </div>
</template>

<script>
    import {computed , ref} from 'vue' 
    import { useStore } from 'vuex'
         
export default {
    props: {
        groupName: String ,
        tgl: String
    },
    setup(props) {
        const store = useStore();
        const groupValue = computed(()=> {return store.getters[props.groupName]})
        const alter = () => {
            console.log('props.tgl',props.tgl)
            store.commit(props.tgl);
        }
        return {alter,groupValue}
    },
}
</script>

<style scoped>
.items {
  width: 3.5rem;
  height: 3.5rem;
  background-color: #F4F6F8;
  border: none;
  border-radius: 0.75rem;
  margin: 0.25rem;
}
.items.selected {
  background-color: #E5E8FD;
}

.items > .icon {
  display: block;
  width: 100%;
  height: 100%;
  background-color: #343A40;

  mask-image: url("../../assets/Arrow+Tail-Up.svg");
  mask-size: 70%;
  mask-repeat: no-repeat;
  mask-position: center;

  -webkit-mask-image: url("../../assets/Arrow+Tail-Up.svg");
  -webkit-mask-size: 70%;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
}
.items.selected > .icon {
  background-color: #253CF2;
}

</style>