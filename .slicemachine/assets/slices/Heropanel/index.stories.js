import MyComponent from '../../../../slices/Heropanel';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Heropanel'
}


export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"title":[{"type":"heading1","text":"Split","spans":[]}],"description":[{"type":"paragraph","text":"Magna adipisicing tempor do amet officia qui sunt laboris. Quis ipsum consequat fugiat commodo est do ullamco enim mollit ad quis excepteur id cillum aliqua. Incididunt dolor nostrud qui occaecat ad ea ut mollit ipsum laboris cillum esse.","spans":[]}],"heroImg":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1498050108023-c5249f4df085"}},"slice_type":"heropanel","id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
