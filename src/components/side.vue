<template>

  <Entity :rotation="[-Math.PI / 2, 0, 0]" :position="[0, 0, -0.15]">
    <ExtrudePolygon :options="{ shape: [$vector([0.133, 0, 0.5]), $vector([0.346, 0, 0.5]), $vector([0, 0, -0.1]), $vector([0, 0, 0.269])], depth: 0.3, sideOrientation: BABYLON.Mesh.DOUBLESIDE }">
      <Material diffuse="#34495E" specular="#34495E"></Material>
    </ExtrudePolygon>
    <ExtrudePolygon :options="{ shape: [$vector([0.346, 0, 0.5]), $vector([0.577, 0, 0.5]), $vector([0, 0, -0.5]), $vector([0, 0, -0.1])], depth: 0.3, sideOrientation: BABYLON.Mesh.DOUBLESIDE }">
      <Material diffuse="#41B883" specular="#41B883"></Material>
    </ExtrudePolygon>
  </Entity>

</template>>

<script>
export default {
  name: "side"
}
</script>

<style scoped>

</style>