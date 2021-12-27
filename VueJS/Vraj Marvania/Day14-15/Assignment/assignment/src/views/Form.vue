<template>
      <BaseSelect
        label="Select a category"
        :options="categories"
        v-model="event.category"
        error="This field is required"
      />

</template>
<script>
import BaseSelect from '../components/BaseSelect.vue'

export default ({

data(){
    return{
        component:{
BaseSelect
        },
     categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community'
      ],
         event: {
             category:null
         }
    }},
    setup() {
        
    },
    
})
</script>
