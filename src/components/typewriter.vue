<template>
    <div class="container">
      <h1>
        <span class="typed-text normal-text">{{ typeValueHi }}</span>
        <span class="typed-text name-text"> {{ typeValueName }} </span>
        <span class="typed-text normal-text">{{ typeValueHere }}</span>
        <span class="blinking-cursor">|</span>
        <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
      </h1>
    </div>
  </template>
  
  <script>
  export default {
    name: "typeWriter",
    data: () => {
      return {
        typeValueHi: "",
        typeValueName: "",
        typeValueHere: "",
        typeStatus: false,
        displayTextArrayHi: ["hi,"],
        displayTextArrayName: [" ivan"],
        displayTextArrayHere: [" here for you!!"],
        typingSpeed: 100,
        erasingSpeed: 100,
        newTextDelay: 1000,
        displayTextArrayIndex: 0,
        charIndexHi: 0,
        charIndexName: 0,
        charIndexHere: 0,
      };
    },
    props: {},
    created() {
      setTimeout(this.typeText, this.newTextDelay + 50);
    },
    methods: {
      typeText() {
        if (this.charIndexHi < this.displayTextArrayHi[this.displayTextArrayIndex].length) {
          if (!this.typeStatus) this.typeStatus = true;
          this.typeValueHi += this.displayTextArrayHi[this.displayTextArrayIndex].charAt(
            this.charIndexHi
          );
          this.charIndexHi += 1;
          console.log(this.typeValueHi);
          setTimeout(this.typeText, this.typingSpeed);

        } else if (this.charIndexName < this.displayTextArrayName[this.displayTextArrayIndex].length) {
          if (!this.typeStatus) this.typeStatus = true;
          this.typeValueName += this.displayTextArrayName[this.displayTextArrayIndex].charAt(
            this.charIndexName
          );
          this.charIndexName += 1;
          console.log(this.typeValueHi);
          setTimeout(this.typeText, this.typingSpeed);

        } else if (this.charIndexHere < this.displayTextArrayHere[this.displayTextArrayIndex].length) {
          if (!this.typeStatus) this.typeStatus = true;
          this.typeValueHere += this.displayTextArrayHere[this.displayTextArrayIndex].charAt(
            this.charIndexHere
          );
          this.charIndexHere += 1;
          console.log(this.typeValueHi);
          setTimeout(this.typeText, this.typingSpeed);
        }
      }
    },
  };
  </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Sono:wght@400;500&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=NTR&display=swap');

  h1 {
    font-size: 86px;
    font-weight: normal;
    span.typed-text.normal-text {
      color: var(--lightest-slate);
    }
  }
  .container{
    margin: 0;
    padding: 0;
    margin-bottom: 10px;
  }
  // Cursor blinking CSS Starts...
  .blinking-cursor {
    font-size: 6rem;
    color: var(--green-bright);
    -webkit-animation: 1s blink step-end infinite;
    -moz-animation: 1s blink step-end infinite;
    -ms-animation: 1s blink step-end infinite;
    -o-animation: 1s blink step-end infinite;
    animation: 1s blink step-end infinite;
  }
  @keyframes blink {
    from,
    to {
      color: transparent;
    }
    50% {
      color: var(--green-bright);
    }
  }
  @-moz-keyframes blink {
    from,
    to {
      color: transparent;
    }
    50% {
      color: var(--green-bright);
    }
  }
  @-webkit-keyframes blink {
    from,
    to {
      color: transparent;
    }
    50% {
      color: var(--green-bright);
    }
  }
  @-ms-keyframes blink {
    from,
    to {
      color: transparent;
    }
    50% {
      color: var(--green-bright);
    }
  }
  @-o-keyframes blink {
    from,
    to {
      color: transparent;
    }
    50% {
      color: var(--green-bright);
    }
  }
  // Cursor blinking CSS Ends...
  .name-text{
    color: var(--green-bright);
    font-weight: bold;
    font-family: 'NTR', sans-serif;


  }
  </style>

  <!-- .container {
    width: 60%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

  } -->