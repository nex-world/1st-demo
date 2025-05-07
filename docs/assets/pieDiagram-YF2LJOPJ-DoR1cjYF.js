import{p as B}from"./chunk-TMUBEWPD-BL-iF0R6.js";import{E as U,r as K,t as V,s as Z,b as j,e as q,d as H,_ as i,m as C,y as J,f as Q,F as X,K as Y,M as ee,N as z,O as te,n as ae,P as re}from"./mermaid-poc_vbRx.js";import{p as ie}from"./gitGraph-YCYPL57B-CxBS6_2V.js";import"./_baseUniq-U4iw6pGM.js";import"./_basePickBy-Dz5oOGk2.js";import"./clone-BxJPuhs_.js";var F=U.pie,D={sections:new Map,showData:!1,config:F},h=D.sections,w=D.showData,se=structuredClone(F),oe=i(()=>structuredClone(se),"getConfig"),ne=i(()=>{h=new Map,w=D.showData,J()},"clear"),le=i(({label:e,value:a})=>{h.has(e)||(h.set(e,a),C.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),ce=i(()=>h,"getSections"),de=i(e=>{w=e},"setShowData"),pe=i(()=>w,"getShowData"),G={getConfig:oe,clear:ne,setDiagramTitle:K,getDiagramTitle:V,setAccTitle:Z,getAccTitle:j,setAccDescription:q,getAccDescription:H,addSection:le,getSections:ce,setShowData:de,getShowData:pe},ge=i((e,a)=>{B(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),ue={parse:i(async e=>{const a=await ie("pie",e);C.debug(a),ge(a,G)},"parse")},fe=i(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),he=fe,me=i(e=>{const a=[...e.entries()].map(s=>({label:s[0],value:s[1]})).sort((s,n)=>n.value-s.value);return re().value(s=>s.value)(a)},"createPieArcs"),Se=i((e,a,M,s)=>{C.debug(`rendering pie chart
`+e);const n=s.db,y=Q(),T=X(n.getConfig(),y.pie),$=40,o=18,p=4,l=450,m=l,S=Y(a),c=S.append("g");c.attr("transform","translate("+m/2+","+l/2+")");const{themeVariables:r}=y;let[A]=ee(r.pieOuterStrokeWidth);A??(A=2);const _=T.textPosition,g=Math.min(m,l)/2-$,O=z().innerRadius(0).outerRadius(g),P=z().innerRadius(g*_).outerRadius(g*_);c.append("circle").attr("cx",0).attr("cy",0).attr("r",g+A/2).attr("class","pieOuterCircle");const E=n.getSections(),v=me(E),W=[r.pie1,r.pie2,r.pie3,r.pie4,r.pie5,r.pie6,r.pie7,r.pie8,r.pie9,r.pie10,r.pie11,r.pie12],d=te(W);c.selectAll("mySlices").data(v).enter().append("path").attr("d",O).attr("fill",t=>d(t.data.label)).attr("class","pieCircle");let b=0;E.forEach(t=>{b+=t}),c.selectAll("mySlices").data(v).enter().append("text").text(t=>(t.data.value/b*100).toFixed(0)+"%").attr("transform",t=>"translate("+P.centroid(t)+")").style("text-anchor","middle").attr("class","slice"),c.append("text").text(n.getDiagramTitle()).attr("x",0).attr("y",-(l-50)/2).attr("class","pieTitleText");const x=c.selectAll(".legend").data(d.domain()).enter().append("g").attr("class","legend").attr("transform",(t,u)=>{const f=o+p,I=f*d.domain().length/2,L=12*o,N=u*f-I;return"translate("+L+","+N+")"});x.append("rect").attr("width",o).attr("height",o).style("fill",d).style("stroke",d),x.data(v).append("text").attr("x",o+p).attr("y",o-p).text(t=>{const{label:u,value:f}=t.data;return n.getShowData()?`${u} [${f}]`:u});const R=Math.max(...x.selectAll("text").nodes().map(t=>(t==null?void 0:t.getBoundingClientRect().width)??0)),k=m+$+o+p+R;S.attr("viewBox",`0 0 ${k} ${l}`),ae(S,l,k,T.useMaxWidth)},"draw"),ve={draw:Se},$e={parser:ue,db:G,renderer:ve,styles:he};export{$e as diagram};
