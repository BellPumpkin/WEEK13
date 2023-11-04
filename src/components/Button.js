// 경로: src/components/Button.js

function Button(props) {
        return <button onClick={props.onClick}>{props.children}</button>;
      }

  
  export default Button;