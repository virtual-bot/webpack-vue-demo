<template>
  <div id="demo-transition">
    <div class="page">
      <div class="page-title">
        <p>动画</p>
      </div>
      <div class="title">
        <p>transition</p>
      </div>
      <div class="section">
        <div class="section-title">
          <p>transition</p>
        </div>
        <div class="section-property">
          <div class="item" v-for="(property, propertyIndex) in propertyList">
            <p class="item-name"
               :style="{backgroundColor:'transparent'}">
              {{property.name}}</p>
            <p class="item-data" v-for="(item, index) in property.list"
               @click="setProperty(propertyIndex, index)"
               :style="{backgroundColor:index === property.index? 'green':'transparent'}"
               :key="item+index">
              {{item}}</p>
          </div>
        </div>
        <div class="transition">
          <div class="item"
               :class="transform"
               :style="{width:width, height:height, top:top, left:left, opacity:opacity, backgroundColor:backgroundColor}">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'style-transition',
    data() {
      return {
        propertyList: [
          {
            name: 'width',
            list: [50, 100, 150, 200],
            index: 0,
          },
          {
            name: 'height',
            list: [50, 100, 150, 200],
            index: 0,
          },
          {
            name: 'top',
            list: [50, 100, 150, 200],
            index: 0,
          },
          {
            name: 'left',
            list: [0, 50, 100, 150],
            index: 0,
          },
          {
            name: 'opacity',
            list: [1.0, 0.75, 0.5, 0.25],
            index: 0,
          },
          {
            name: 'color',
            list: ['#ac5151', '#fff', '#dac555', '#acafff'],
            index: 0,
          },
          {
            name: 'transform',
            list: ['rotate-1', 'rotate-2', 'rotate-3'],
            index: 0,
          },
        ],
      };
    },
    computed: {
      width() {
        return this.propertyList[0].list[this.propertyList[0].index];
      },
      height() {
        return this.propertyList[1].list[this.propertyList[1].index];
      },
      top() {
        return this.propertyList[2].list[this.propertyList[2].index];
      },
      left() {
        return this.propertyList[3].list[this.propertyList[3].index];
      },
      opacity() {
        return this.propertyList[4].list[this.propertyList[4].index];
      },
      backgroundColor() {
        return this.propertyList[5].list[this.propertyList[5].index];
      },
      transform() {
        return this.propertyList[6].list[this.propertyList[6].index];
      },
    },
    methods: {
      setProperty(index, pIndex) {
        this.$set(this.propertyList[index], 'index', pIndex);
      },

    },
  };
</script>

<style scoped lang="scss">
  #demo-transition {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    overflow-y: scroll;
    overflow-x: hidden;

    .page {
      display: flex;
      flex-direction: column;
      padding-top: 10px;

      .page-title {
        margin-left: 10px;
        font-size: 28px;
      }

      .title {
        margin-left: 10px;
        margin-bottom: 10px;
        height: 30px;

        p {
          color: #666;
          font-size: 18px;
          text-align: left;
          line-height: 30px;
        }
      }

      .section {
        display: flex;
        flex-direction: column;
        align-items: center;

        &-title {
          margin-top: 20px;
          margin-bottom: 10px;
          font-size: 14px;
          color: #666;
        }

        &-property {
          display: flex;
          flex-direction: column;
          align-items: center;
          /*height: 120px;*/
          width: 300px;

          .item {
            display: flex;
            flex-direction: row;
            width: 300px;
            margin-bottom: 10px;

            &-name {
              width: 60px;
              font-size: 16px;
              color: black;
              margin-right: 15px;
            }

            &-data {
              width: 40px;
              font-size: 16px;
              text-align: center;
              color: black;
              margin-right: 15px;
            }
          }
        }


        > .transition {
          display: flex;
          width: 300px;
          height: 400px;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          background-color: #aaaaaa;

          .item {
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #ac5151;
            transition: all 300ms linear;
            animation: aaa 3s linear 2s 1 alternate;

            p {
              font-size: 12px;
              color: #fff;
            }
          }

          .rotate-1 {
            transform: rotate(0deg);
          }

          .rotate-2 {
            transform: rotate(7deg);
          }

          .rotate-3 {
            transform: rotate(40deg);
          }
        }

        @keyframes aaa {
          from {
            background-color: red;
            width: 100px;
            opacity: 0.75;
          }

          to {
            background-color: blue;
            width: 200px;
            opacity: 0.8;
          }
        }
        @keyframes bbb {
          from {
            background-color: red;
            width: 100px;
            opacity: 0.75;
          }

          to {
            background-color: blue;
            width: 200px;
            opacity: 0.8;
          }
        }
      }
    }
  }
</style>
