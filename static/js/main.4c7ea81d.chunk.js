(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(59)},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(21),i=a.n(r),c=a(2),o=a.n(c),l=a(22),u=a(3),m=a(4),h=a(7),p=a(6),d=a(5),y=a(8),f=a(23),x=a.n(f),v=(a(57),function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"cont"},s.a.createElement("img",{src:this.props.image,alt:"",width:"200px",height:"200px"})),s.a.createElement("div",{className:"texts"},s.a.createElement("h2",null,this.props.name.charAt(0).toUpperCase()+this.props.name.slice(1)),s.a.createElement("h3",null,this.props.types.toUpperCase()),s.a.createElement("h4",null,this.props.text)))}}]),t}(n.Component)),k=(a(58),new x.a),b=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(h.a)(this,Object(p.a)(t).call(this))).state={name:"",url:"",term:"",text:"",type:""},e.keypressed=function(t){"Enter"===t.key&&e.handlePokedex()},e.handlePokedex=e.handlePokedex.bind(Object(d.a)(e)),e}return Object(y.a)(t,e),Object(m.a)(t,[{key:"handlePokedex",value:function(){var e=Object(l.a)(o.a.mark(function e(){var t,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.getPokemonByName(this.state.term.toLowerCase());case 2:return t=e.sent,e.next=5,k.getPokemonSpeciesByName(this.state.term.toLowerCase());case 5:a=e.sent,console.log(t),""!==this.state.term?(this.setState({name:t.name}),this.setState({url:t.sprites.front_default}),this.setState({text:a.flavor_text_entries[2].flavor_text}),this.setState({type:t.types[0].type.name})):alert("Please enter a valid Pokemon name");case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"main"},s.a.createElement("div",{className:"containers",style:this.styles},s.a.createElement(v,{name:this.state.name,image:this.state.url,text:this.state.text,types:this.state.type}),s.a.createElement("input",{type:"text",value:this.state.term,onChange:function(t){e.setState({term:t.target.value})},onKeyPress:this.keypressed}),s.a.createElement("button",{className:"btn",onClick:this.handlePokedex})))}}]),t}(n.Component);i.a.render(s.a.createElement(b,null),document.querySelector("#root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.4c7ea81d.chunk.js.map