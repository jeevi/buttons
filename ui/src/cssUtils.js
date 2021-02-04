export const getVariant = type => {

    const common = {
        borderRadius: '6px',
        fontFamily: 'Noto Sans JP',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '14px',
        lineHeight: '20px',
        textAlign: 'center',
        color: '#3F3F3F',
        background: '#E0E0E0',
    };

    switch(type) {
        case "outline": 
            return {
                ...common,
                border: '1px solid #3D5AFE',
                color: '#3D5AFE',
                background: '#FFFFFF',
            };

        case "text":
            return {
                ...common,
                background: 'none',
                border: 'none',
                color: '#3D5AFE',
            };

        default:
            return common;
    }
};


export const getSize = size => {
    switch(size) {
        case "sm":
            return {
                width: '73px',
                height: '32px',
            }
        case "md":
            return {
                width: '81px',
                height: '36px',
            }
        case "lg":
            return {
                width: '93px',
                height: '42px',
            }
        default:
            return {
                width: '81px',
                height: '36px',
            }
    }
};

export const getButtonColor = color => {
    switch(color) {
        case "primary":
            return { background: '#2962FF', boxShadow: '0px 2px 3px rgba(41, 98, 255, 0.2)', color: '#FFFFFF' }
        case "secondary":
            return { background: '#455A64', boxShadow: '0px 2px 3px rgba(69, 90, 100, 0.2)', color: '#FFFFFF' }
        case "danger":
            return { background: '#D32F2F', boxShadow: '0px 2px 3px rgba(211, 47, 47, 0.2)', color: '#FFFFFF' }
        case "default":
            return { background: '#E0E0E0', boxShadow: '0px 2px 3px rgba(51, 51, 51, 0.2)', color: '#3F3F3F' }
        default:
            return {};
    }
};


export function mouseOver(event) {
    if (event.target.nodeName === "BUTTON" && !event.target.disabled) {
      const backgroundColor = event.target.style.backgroundColor;
      switch(backgroundColor) {
        // grey
        case 'rgb(69, 90, 100)':
          event.target.style.backgroundColor = '#1C313A';
          break;
        // blue
        case 'rgb(41, 98, 255)':
          event.target.style.backgroundColor = '#0039CB';
          break;
        // red
        case 'rgb(211, 47, 47)':
          event.target.style.backgroundColor = '#9A0007';
          break;
        // default
        case 'rgb(224, 224, 224)':
          event.target.style.backgroundColor = '#AEAEAE';
          break;
        // white
        case 'rgb(255, 255, 255)':
          event.target.style.backgroundColor = 'rgba(41, 98, 255, 0.1)';
          break;
        default:
          break;
      }
    }
  }
  
  export function mouseOut(event) {
    if (event.target.nodeName === "BUTTON" && !event.target.disabled) {
      const backgroundColor = event.target.style.backgroundColor;
      switch(backgroundColor) {
        // grey
        case 'rgb(28, 49, 58)':
          event.target.style.backgroundColor = 'rgb(69, 90, 100)';
          break;
        // blue
        case 'rgb(0, 57, 203)':
          event.target.style.backgroundColor = 'rgb(41, 98, 255)';
          break;
        // red
        case 'rgb(154, 0, 7)':
          event.target.style.backgroundColor = 'rgb(211, 47, 47)';
          break;
        // default
        case 'rgb(174, 174, 174)':
          event.target.style.backgroundColor = 'rgb(224, 224, 224)';
          break;
        // light blue
        case 'rgba(41, 98, 255, 0.1)':
          event.target.style.backgroundColor = 'rgb(255, 255, 255)';
          break;
        default:
          break;
      }
    }
  }