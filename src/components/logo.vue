<template>

  <Scene>
    <Property name="clearColor" color="#FFF"></Property>
    <Camera type="arcRotate"></Camera>
    <HemisphericLight>
      <property name="intensity" :float="2"></property>
    </HemisphericLight>
    <Entity :scaling="[5, 5, 5]">
      <Animation property="rotation.y" :duration="5" :end="-Math.PI * 2"></Animation>
      <Side></Side>
      <Entity :scaling="[-1, 1, 1]">
        <Side></Side>
      </Entity>
    </Entity>
  </Scene>

</template>

<script>
import side from "./side";
import Side from "./side";
export default {
name: "logo",
  components: {Side}
}
</script>

<style scoped>

</style>