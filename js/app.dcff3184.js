(function(){var t={8719:function(t,e,s){"use strict";var r=s(144),n=function(){var t=this,e=t._self._c;return e("div",[e("GameMain")],1)},a=[],i=function(){var t=this,e=t._self._c;return e("main",{staticClass:"main w-full h-screen max-h-screen flex justify-center py-6"},[e("div",{staticClass:"w-full max-w-[850px] max-h-screen flex items-center"},[e("div",{staticClass:"bg-amber-50 border-slate-700 border-2 rounded rounded-md shadow-md w-full"},["info"===t.actualView.type?e("InfoContent"):t._e(),"sections"===t.actualView.type?e("GameSections"):t._e(),"answersButtons"===t.actualView.type?e("AnswersButtons"):t._e(),"answersCheckboxes"===t.actualView.type?e("AnswersCheckboxes"):t._e()],1)])])},o=[],c=s(629),l=function(){var t=this,e=t._self._c;return e("div",[e("GameTitle",{attrs:{titleText:t.actualView.title}}),e("div",{class:t.classBodyContent,staticStyle:{"max-height":"calc(100vh - 250px)"}},[t._l(t.actualView.bodyContent,(function(s,r){return e("div",{key:r},[s.contentText?e("InfoText",{attrs:{contentText:s.contentText}}):t._e(),s.contentImage?e("InfoImage",{attrs:{contentImage:s.contentImage}}):t._e()],1)})),t.actualView.acceptCheckbox?e("AcceptCheckbox",{attrs:{isAccept:t.isAccept},on:{changeAccept:t.changeAccept}}):t._e(),t.actualView.feedback?e("UserFeedback"):t._e()],2),e("GameFooter",{attrs:{footerData:t.actualView.footer}})],1)},u=[],m=function(){var t=this,e=t._self._c;return e("span",{staticClass:"font-inter-normal text-md text-slate-600",domProps:{innerHTML:t._s(t.contentText)}})},p=[],d={name:"InfoText",props:{contentText:String}},f=d,h=s(1001),b=(0,h.Z)(f,m,p,!1,null,null,null),x=b.exports,g=function(){var t=this,e=t._self._c;return 2===t.contentImage.length?e("div",{staticClass:"flex justify-center gap-6 mt-5"},t._l(t.contentImage,(function(s,r){return e("div",{key:r,staticClass:"flex flex-col items-center w-[32%] relative"},[s.image?e("img",{staticClass:"mt-5 rounded-md",attrs:{src:t.getImage(r),alt:"image"}}):t._e(),s.topLabel?e("ImageTopLabel",{attrs:{textTopLabel:s.topLabel}}):t._e(),s.bottomLabel?e("ImageBottomLabel",{attrs:{textTopLabel:s.bottomLabel}}):t._e()],1)})),0):1===t.contentImage.length?e("div",{staticClass:"px-12 py-6 flex-col flex items-center relative"},[t.contentImage[0].image?e("img",{staticClass:"w-[60%] mt-5 rounded-md",attrs:{src:t.getImage(0),alt:"image"}}):t._e(),t.contentImage[0].bottomLabel?e("ImageBottomLabel",{attrs:{textTopLabel:t.contentImage[0].bottomLabel}}):t._e()],1):t._e()},_=[],w=function(){var t=this,e=t._self._c;return e("p",{staticClass:"font-inter-normal text-sm text-slate-600 absolute z-20 left-2 top-8 bg-amber-50 bg-opacity-70 px-2 py-1 rounded-md"},[t._v(" "+t._s(t.textTopLabel)+" ")])},v=[],y={name:"ImageTopLabel",props:{textTopLabel:String}},C=y,k=(0,h.Z)(C,w,v,!1,null,null,null),A=k.exports,T=function(){var t=this,e=t._self._c;return e("span",{staticClass:"text-center text-sm mt-2 text-slate-400 font-inter-medium w-[70%]"},[t._v(" "+t._s(t.textTopLabel)+" ")])},P=[],S={name:"ImageBottomLabel",props:{textTopLabel:String}},I=S,V=(0,h.Z)(I,T,P,!1,null,null,null),D=V.exports,N={name:"InfoImage",components:{ImageTopLabel:A,ImageBottomLabel:D},props:{contentImage:[]},methods:{getImage(t){return s(990)(`./${this.contentImage[t].image}`)}}},B=N,j=(0,h.Z)(B,g,_,!1,null,null,null),F=j.exports,L=function(){var t=this,e=t._self._c;return e("div",{staticClass:"px-28 py-6 flex items-center flex-col"},[t.actualView.showPercentText?e("PercentText"):t._e(),e("FooterButtons")],1)},O=[],M=function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex justify-between w-full"},[e("span",{staticClass:"font-inter-normal text-md text-slate-600"},[t._v(" Только "+t._s(t.randomPercent)+"% пользователей сумели пройти этот сценарий с первого раза! ")]),e("img",{attrs:{src:s(3129),alt:"cup",width:"30"}})])},G=[],E={name:"PercentText",computed:{randomPercent(){return(12*Math.random()+61).toFixed(0)}}},Z=E,R=(0,h.Z)(Z,M,G,!1,null,null,null),$=R.exports,q=function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex gap-4"},[t._l(t.actualView.footerButtonList,(function(s,r){return e("GameButton",{key:r,attrs:{buttonData:s},on:{buttonClick:function(e){return t.buttonClick(e)}}})})),t.showModal?e("ModalWarning",{attrs:{correct:t.correct},on:{closeModal:t.closeModal}}):t._e()],2)},U=[],z=function(){var t=this,e=t._self._c;return e("button",{staticClass:"my-4 max-w-min px-6 py-2 border border-slate-700 rounded-lg text-sm text-slate-600 font-inter-medium hover:scale-105 duration-300",on:{click:t.buttonClick}},[t._v(" "+t._s(t.buttonData.name)+" ")])},H=[],W={name:"GameButton",props:{buttonData:{}},computed:{},methods:{buttonClick(){this.$emit("buttonClick",this.buttonData.action)}}},J=W,K=(0,h.Z)(J,z,H,!1,null,null,null),Q=K.exports,X=function(){var t=this,e=t._self._c;return e("div",{staticClass:"fixed w-full h-screen left-0 top-0 flex justify-center items-center",on:{click:t.closeModal}},[t.correct?e("div",{staticClass:"bg-green-100 px-12 py-6 border-2 border-green-400 rounded-md z-20 font-inter-normal text-md text-green-400"},[t._v(" Диагноз верный! ")]):e("div",{staticClass:"bg-rose-100 px-12 py-6 border-2 border-rose-400 rounded-md z-20 font-inter-normal text-md text-rose-400"},[t._v(" Диагноз неверный! ")])])},Y=[],tt={name:"ModalWarning",props:{correct:Boolean},methods:{closeModal(){this.$emit("closeModal")}}},et=tt,st=(0,h.Z)(et,X,Y,!1,null,null,null),rt=st.exports,nt={name:"FooterButtons",components:{GameButton:Q,ModalWarning:rt},data(){return{showModal:!1,correct:!1}},computed:{...(0,c.Se)(["actualView","actualProperty","completed","stepNumber","testId"])},methods:{...(0,c.nv)(["nextStep","previousStep","returnActualView","setCompleted","setCurrentAnswer","SEND_DATA_TO_API"]),buttonClick(t){if("next"===t)if(this.completed)this.nextStep();else if("answersButtons"===this.actualView.type)this.actualProperty.currentAnswer&&this.actualView.bodyButtons[this.actualProperty.currentAnswer].isRight?(this.SEND_DATA_TO_API({type:this.actualView.type,currentAnswer:this.actualProperty.currentAnswer,isRight:!0,numberTry:this.actualProperty.numberTry}),this.setCompleted(!0),this.openModal(!0,(()=>{this.nextStep()}))):3===this.actualProperty.numberTry?(this.SEND_DATA_TO_API({type:this.actualView.type,currentAnswer:this.actualProperty.currentAnswer,isRight:!1,numberTry:this.actualProperty.numberTry}),this.setCompleted(!0),this.setTrueAnswer()):this.actualProperty.numberTry<3&&(this.SEND_DATA_TO_API({type:this.actualView.type,currentAnswer:this.actualProperty.currentAnswer,isRight:!1,numberTry:this.actualProperty.numberTry}),this.actualProperty.numberTry+=1,this.openModal(!1,(()=>{})));else if("answersCheckboxes"===this.actualView.type){for(let t=0;t<this.actualView.bodyCheckboxes.length;t++)if(this.actualView.bodyCheckboxes[t].isRight!==this.actualProperty.checkboxList[t]){if(3===this.actualProperty.numberTry)return this.SEND_DATA_TO_API({type:this.actualView.type,currentAnswer:this.actualProperty.checkboxList,isRight:!1,numberTry:this.actualProperty.numberTry}),void this.setTrueCheckboxes((()=>{this.setCompleted(!0)}));if(this.actualProperty.numberTry<3)return this.actualProperty.numberTry+=1,this.SEND_DATA_TO_API({type:this.actualView.type,currentAnswer:this.actualProperty.checkboxList,isRight:!1,numberTry:this.actualProperty.numberTry}),void this.openModal(!1,(()=>{}))}this.SEND_DATA_TO_API({type:this.actualView.type,currentAnswer:this.actualProperty.checkboxList,isRight:!0,numberTry:this.actualProperty.numberTry}),this.setCompleted(!0),this.openModal(!0,(()=>{this.nextStep()}))}else("sections"===this.actualView.type||"info"===this.actualView.type)&&(this.SEND_DATA_TO_API({type:this.actualView.type}),this.setCompleted(!0),this.nextStep());"previous"===t&&this.previousStep(),"return"===t&&this.returnActualView()},async openModal(t,e){this.correct=t,this.showModal=!0,await this.sleep(1e3),this.showModal=!1,e()},closeModal(){this.showModal=!1},setTrueAnswer(){for(let t=0;t<this.actualView.bodyButtons.length;t++)this.actualView.bodyButtons[t].isRight&&this.setCurrentAnswer(t)},async setTrueCheckboxes(t){for(let e=0;e<this.actualView.bodyCheckboxes.length;e++)this.actualProperty.checkboxList[e]=this.actualView.bodyCheckboxes[e].isRight;await this.sleep(1e3),t()},sleep(t){return new Promise((e=>setTimeout(e,t)))}}},at=nt,it=(0,h.Z)(at,q,U,!1,null,null,null),ot=it.exports,ct={name:"GameFooter",components:{PercentText:$,FooterButtons:ot},props:{footerData:{}},computed:{...(0,c.Se)(["actualView"])}},lt=ct,ut=(0,h.Z)(lt,L,O,!1,null,null,null),mt=ut.exports,pt=function(){var t=this,e=t._self._c;return e("h1",{staticClass:"text-center text-red-600 font-inter-medium text-lg py-6 border-b border-slate-700"},[t._v(" "+t._s(t.titleText)+" ")])},dt=[],ft={name:"GameTitle",props:{titleText:String}},ht=ft,bt=(0,h.Z)(ht,pt,dt,!1,null,null,null),xt=bt.exports,gt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex mt-3 items-end cursor-pointer",on:{click:t.changeAccept}},[e("input",{staticClass:"w-5 h-5 mr-2",attrs:{type:"checkbox"},domProps:{checked:t.isAccept}}),e("span",{staticClass:"font-inter-normal text-md",class:{"text-slate-600":t.isAccept,"text-red-600":!t.isAccept}},[t._v(" Принимаю ")])])},_t=[],wt={name:"AcceptCheckbox",props:{isAccept:Boolean},methods:{changeAccept(){this.$emit("changeAccept")}}},vt=wt,yt=(0,h.Z)(vt,gt,_t,!1,null,null,null),Ct=yt.exports,kt=function(){var t=this,e=t._self._c;return e("div",[t.feedback.isSent?t._e():e("div",{staticClass:"w-full bg-white mt-10 px-16 py-10"},[e("div",{staticClass:"flex"},[e("img",{staticClass:"shrink-0 mr-8 self-start",attrs:{src:s(3129),alt:"cup",width:"50"}}),e("div",{staticClass:"w-full"},[e("p",{staticClass:"font-inter-semi-bold text-sm text-slate-600"},[t._v(" Поздравляем! Вы справились с заданием лучше чем "+t._s(t.randomPercent)+"% пользователей! ")]),e("div",{staticClass:"flex w-full font-inter-normal text-sm text-slate-600 items-center mt-5"},[e("span",{staticClass:"w-[340px]"},[t._v("Кейс был полезным для Вас?")]),e("div",{staticClass:"grid grid-cols-2 items-center w-full"},[e("div",{staticClass:"flex items-center cursor-pointer max-w-min",on:{click:function(e){return t.setFeedback("useful",!0)}}},[e("div",{staticClass:"flex items-center"},[e("div",{staticClass:"w-5 h-5 border border-slate-700 rounded-full shrink-0 flex justify-center items-center mr-3"},[e("div",{staticClass:"w-2 h-2 shrink-0 rounded-full",class:{"bg-slate-700":t.feedback.useful}})]),e("span",[t._v("Да")])])]),e("div",{staticClass:"flex items-center cursor-pointer max-w-min",on:{click:function(e){return t.setFeedback("useful",!1)}}},[e("div",{staticClass:"flex items-center"},[e("div",{staticClass:"w-5 h-5 border border-slate-700 rounded-full shrink-0 flex justify-center items-center mr-3"},[e("div",{staticClass:"w-2 h-2 shrink-0 rounded-full",class:{"bg-slate-700":!t.feedback.useful}})]),e("span",[t._v("Нет")])])])])]),t.feedback.useful?e("p",{staticClass:"font-inter-semi-bold text-sm text-slate-600 mt-5"},[t._v(" Спасибо, скоро выложим новые сценарии, заходите проверить себя! ")]):t._e(),t.feedback.useful?t._e():e("div",{staticClass:"font-inter-normal text-sm text-slate-600 mt-5"},[e("span",{staticClass:"w-full"},[t._v("Поделитесь, что вам не понравилось?")]),e("div",{staticClass:"flex w-full mt-5"},[t._m(0),e("div",{staticClass:"grid grid-cols-2 items-center w-full"},[e("div",{staticClass:"flex items-center cursor-pointer max-w-min",on:{click:function(e){return t.setFeedback("complexity",1)}}},[e("div",{staticClass:"flex items-center"},[e("div",{staticClass:"w-5 h-5 border border-slate-700 rounded-full shrink-0 flex justify-center items-center mr-3"},[e("div",{staticClass:"w-2 h-2 shrink-0 rounded-full",class:{"bg-slate-700":1===t.feedback.complexity}})]),e("span",[t._v("Слишком сложно")])])]),e("div",{staticClass:"flex items-center cursor-pointer max-w-min",on:{click:function(e){return t.setFeedback("complexity",2)}}},[e("div",{staticClass:"flex items-center"},[e("div",{staticClass:"w-5 h-5 border border-slate-700 rounded-full shrink-0 flex justify-center items-center mr-3"},[e("div",{staticClass:"w-2 h-2 shrink-0 rounded-full",class:{"bg-slate-700":2===t.feedback.complexity}})]),e("span",[t._v("Слишком просто")])])])])]),e("div",{staticClass:"flex w-full mt-5"},[t._m(1),e("div",{staticClass:"grid grid-cols-2 items-center w-full"},[e("div",{staticClass:"flex items-center cursor-pointer",on:{click:function(e){return t.setFeedback("frequency",1)}}},[e("div",{staticClass:"flex items-center"},[e("div",{staticClass:"w-5 h-5 border border-slate-700 rounded-full shrink-0 flex justify-center items-center mr-3"},[e("div",{staticClass:"w-2 h-2 shrink-0 rounded-full",class:{"bg-slate-700":1===t.feedback.frequency}})]),e("span",[t._v("Слишком редкая ситуация")])])]),e("div",{staticClass:"flex items-center cursor-pointer",on:{click:function(e){return t.setFeedback("frequency",2)}}},[e("div",{staticClass:"flex items-center"},[e("div",{staticClass:"w-5 h-5 border border-slate-700 rounded-full shrink-0 flex justify-center items-center mr-3"},[e("div",{staticClass:"w-2 h-2 shrink-0 rounded-full",class:{"bg-slate-700":2===t.feedback.frequency}})]),e("span",[t._v("Слишком частая ситуация")])])])])]),e("div",{staticClass:"flex w-full mt-5"},[t._m(2),e("div",{staticClass:"grid grid-cols-2 items-center w-full"},[e("div",{staticClass:"flex items-center cursor-pointer",on:{click:function(e){return t.setFeedback("disagreeDiagnosis",!t.feedback.disagreeDiagnosis)}}},[e("div",{staticClass:"flex items-center"},[e("div",{staticClass:"w-5 h-5 border border-slate-700 rounded-full shrink-0 flex justify-center items-center mr-3"},[e("div",{staticClass:"w-2 h-2 shrink-0 rounded-full",class:{"bg-slate-700":t.feedback.disagreeDiagnosis}})]),e("span",[t._v("Не согласен с решением")])])])])])]),e("div",{staticClass:"w-full font-inter-normal text-sm text-slate-600"},[e("div",{staticClass:"flex w-full mt-5 items-end"},[e("span",{staticClass:"w-[340px] mb-1"},[t._v("Оцените сложность сценария:")]),e("div",{staticClass:"flex flex-col w-full"},[t._m(3),e("div",{staticClass:"flex justify-between items-center w-full mt-2"},t._l(t.stars,(function(r,n){return e("div",{key:`st-${n}`,staticClass:"cursor-pointer",on:{mouseover:function(e){t.starHover=r},mouseleave:function(e){t.starHover=0},click:function(e){return t.setFeedback("stars",r)}}},[t.feedback.stars<r?e("img",{attrs:{src:s(3111),width:"25",alt:"star"}}):t._e(),t.feedback.stars>=r?e("img",{attrs:{src:s(3632),width:"25",alt:"star"}}):t._e()])})),0)])]),e("div",{staticClass:"flex w-full mt-5"},[e("span",{staticClass:"w-[340px] pr-4"},[t._v(" Пожалуйста, оставьте ваш комментарий по данному сценарию: ")]),e("textarea",{staticClass:"w-full border-slate-700 border p-2 h-16 outline-none",on:{change:function(e){return t.setFeedback("comment",e.target.value)}}})]),e("div",{staticClass:"flex w-full mt-5"},[e("span",{staticClass:"w-[340px] pr-4"},[t._v(" Кейс на какую тему Вам было бы интересно потренировать: ")]),e("textarea",{staticClass:"w-full border-slate-700 border p-2 h-16 outline-none",on:{change:function(e){return t.setFeedback("interestingCase",e.target.value)}}})])])])]),e("div",{staticClass:"w-full flex justify-center"},[e("button",{staticClass:"mt-8 bg-amber-500 max-w-min px-6 py-2 rounded-lg text-sm text-white font-inter-medium hover:scale-105 duration-300",on:{click:function(e){return t.setFeedback("isSent",!0)}}},[t._v(" Отправить ")])])]),t.feedback.isSent?e("div",{staticClass:"w-full bg-white mt-10 px-32 py-20 flex"},[e("span",{staticClass:"font-inter-normal text-amber-500 text-center text-lg"},[t._v(" Спасибо! Ваше мнение очень ценно для нас, мы обязательно учтем его при разработке следующих сценариев! ")])]):t._e()])},At=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-[340px]"},[e("span",{staticClass:"pl-16"},[t._v("Сложность:")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-[340px]"},[e("span",{staticClass:"pl-16"},[t._v("Частотность:")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-[340px]"},[e("span",{staticClass:"pl-16"},[t._v("Диагноз и лечение:")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex justify-between w-full"},[e("span",[t._v("слишком просто")]),e("span",[t._v("слишком сложно")])])}],Tt={name:"UserFeedback",data(){return{stars:[1,2,3,4,5,6,7,8,9,10]}},computed:{...(0,c.Se)(["feedback"]),randomPercent(){return(15*Math.random()+70).toFixed(0)}},methods:{...(0,c.nv)(["setFeedbackItem"]),setFeedback(t,e){console.log(e),this.setFeedbackItem({name:t,value:e})}}},Pt=Tt,St=(0,h.Z)(Pt,kt,At,!1,null,null,null),It=St.exports,Vt={name:"InfoContent",data(){return{isAccept:!1}},components:{InfoText:x,InfoImage:F,GameFooter:mt,GameTitle:xt,AcceptCheckbox:Ct,UserFeedback:It},computed:{...(0,c.Se)(["gameData","stepNumber","actualView"]),classBodyContent(){return this.actualView.acceptCheckbox?"px-28 py-6 border-b border-slate-700 flex flex-col":"px-12 py-6 flex-col flex items-center overflow-y-auto"}},methods:{changeAccept(){this.isAccept=!this.isAccept}}},Dt=Vt,Nt=(0,h.Z)(Dt,l,u,!1,null,null,null),Bt=Nt.exports,jt=function(){var t=this,e=t._self._c;return e("div",[e("GameTitle",{attrs:{titleText:t.actualView.title}}),e("div",{staticClass:"px-8 py-6 grid grid-cols-2 sm:grid-cols-4 font-inter-semi-bold text-md text-slate-600 justify-between"},t._l(t.actualView.sections,(function(t,s){return e("SectionButton",{key:s,attrs:{sectionItem:t}})})),1),e("GameFooter",{attrs:{footerData:t.actualView.footer}})],1)},Ft=[],Lt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-3"},[e("button",{staticClass:"hover:scale-105 duration-300 w-full min-h-[140px] h-full flex flex-col items-center justify-between shadow-md border-2 border-slate-700 rounded-md",on:{click:function(e){return t.openSection()}}},[e("img",{staticClass:"p-2 max-w-[80px]",attrs:{src:t.buttonImage,alt:"button image"}}),e("div",{staticClass:"h-[50px]"},[e("span",[t._v(t._s(t.buttonName))])])])])},Ot=[],Mt={name:"SectionButton",props:{sectionItem:{}},computed:{buttonImage(){return s(990)(`./${this.sectionItem.image}`)},buttonName(){return this.sectionItem.sectionName}},methods:{...(0,c.nv)(["setActualView"]),openSection(){this.setActualView(this.sectionItem.sectionContent)}}},Gt=Mt,Et=(0,h.Z)(Gt,Lt,Ot,!1,null,null,null),Zt=Et.exports,Rt={name:"GameSections",components:{GameFooter:mt,GameTitle:xt,SectionButton:Zt},computed:{...(0,c.Se)(["actualView"])}},$t=Rt,qt=(0,h.Z)($t,jt,Ft,!1,null,null,null),Ut=qt.exports,zt=function(){var t=this,e=t._self._c;return e("div",[e("GameTitle",{attrs:{titleText:t.actualView.title}}),e("div",{staticClass:"px-8 py-6"},[e("ul",{staticClass:"grid grid-cols-1 gap-5 sm:grid-cols-2"},t._l(t.actualView.bodyButtons,(function(s,r){return e("AnswerButton",{key:r,attrs:{answerButtonInfo:s,answerNumber:r,currentAnswerNumber:t.currentAnswerNumber,notOneButtonSelected:t.notOneButtonSelected,isDisable:t.actualProperty.completed},on:{selectButton:function(e){return t.selectButton(e)}}})})),1),e("GameFooter",{attrs:{footerData:t.actualView.footer}})],1)],1)},Ht=[],Wt=function(){var t=this,e=t._self._c;return e("li",{staticClass:"border border-slate-600 rounded-md text-sm font-inter-normal p-3 select-none duration-300",class:{"bg-slate-600 text-amber-50":t.isSelected,"text-slate-600 cursor-pointer hover:scale-105":t.notOneButtonSelected,"text-slate-600":!t.isSelected},on:{click:t.buttonClick}},[e("span",[t._v(t._s(t.answerButtonInfo.buttonText))])])},Jt=[],Kt={name:"AnswerButton",components:{},props:{answerButtonInfo:{},answerNumber:Number,currentAnswerNumber:Number,notOneButtonSelected:Boolean,isDisable:Boolean},computed:{isSelected(){return this.answerNumber===this.currentAnswerNumber}},methods:{buttonClick(){this.isDisable||this.$emit("selectButton",this.answerNumber)}},mounted(){}},Qt=Kt,Xt=(0,h.Z)(Qt,Wt,Jt,!1,null,null,null),Yt=Xt.exports,te={name:"AnswersButtons",components:{GameFooter:mt,GameTitle:xt,AnswerButton:Yt},computed:{...(0,c.Se)(["actualView","actualProperty","stepNumber"]),notOneButtonSelected(){return null===this.actualProperty.currentAnswer},currentAnswerNumber(){return this.actualProperty.currentAnswer}},methods:{...(0,c.nv)(["setCurrentAnswer"]),selectButton(t){this.setCurrentAnswer(t)}}},ee=te,se=(0,h.Z)(ee,zt,Ht,!1,null,null,null),re=se.exports,ne=function(){var t=this,e=t._self._c;return e("div",[e("GameTitle",{attrs:{titleText:t.actualView.title}}),e("h2",{staticClass:"font-inter-normal text-md text-slate-600 text-center w-full mt-5"},[t._v(" "+t._s(t.actualView.headerText)+" ")]),e("div",{staticClass:"px-8 py-6"},[e("ul",{staticClass:"grid grid-cols-1 gap-4 sm:grid-cols-2"},t._l(t.actualView.bodyCheckboxes,(function(s,r){return e("AnswerCheckbox",{key:r,attrs:{answerCheckboxInfo:s,isChecked:t.actualProperty.checkboxList[r],answerNumber:r,isDisable:t.actualProperty.completed},on:{selectCheckbox:function(e){return t.selectCheckbox(r)}}})})),1)]),e("GameFooter",{attrs:{footerData:t.actualView.footer}})],1)},ae=[],ie=function(){var t=this,e=t._self._c;return e("li",{staticClass:"text-sm font-inter-normal select-none flex text-slate-600 w-full justify-start"},[e("input",{staticClass:"w-5 h-5 mr-4 shrink-0",attrs:{type:"checkbox",id:t.checkboxId,disabled:t.isDisable},domProps:{checked:t.isChecked},on:{click:t.selectCheckbox}}),e("label",{staticClass:"w-full",attrs:{for:t.checkboxId}},[t._v(" "+t._s(t.answerCheckboxInfo.checkboxText)+" ")])])},oe=[],ce={name:"AnswerCheckbox",props:{answerCheckboxInfo:{},answerNumber:Number,isChecked:Boolean,isDisable:Boolean},computed:{_isChecked:{get(){return this.isChecked},set(){this.selectCheckbox()}},checkboxId(){return"checkbox"+this.answerNumber}},methods:{selectCheckbox(){this.$emit("selectCheckbox",this.answerNumber)}},mounted(){}},le=ce,ue=(0,h.Z)(le,ie,oe,!1,null,null,null),me=ue.exports,pe={name:"AnswersCheckboxes",components:{AnswerCheckbox:me,GameFooter:mt,GameTitle:xt},computed:{...(0,c.Se)(["actualView","actualProperty","stepNumber"])},methods:{...(0,c.nv)(["changeAnswerCheckbox"]),selectCheckbox(t){this.changeAnswerCheckbox(t)}}},de=pe,fe=(0,h.Z)(de,ne,ae,!1,null,null,null),he=fe.exports,be={name:"GameMain",components:{InfoContent:Bt,GameSections:Ut,AnswersButtons:re,AnswersCheckboxes:he},computed:{...(0,c.Se)(["gameData","stepNumber","actualView"])},methods:{...(0,c.nv)(["GET_DATA_FROM_API"])},created(){this.GET_DATA_FROM_API()}},xe=be,ge=(0,h.Z)(xe,i,o,!1,null,null,null),_e=ge.exports,we={name:"App",components:{GameMain:_e}},ve=we,ye=(0,h.Z)(ve,n,a,!1,null,null,null),Ce=ye.exports,ke=(s(7658),s(196));r["default"].use(c.ZP);const Ae=new c.ZP.Store({state:{testId:0,testData:{},gameData:[],actualView:{},actualProperty:{},stepNumber:0,actualType:"",propertyList:[],feedback:{isSent:!1,useful:!0,complexity:0,frequency:0,disagreeDiagnosis:!1,stars:0,comment:"",interestingCase:""}},getters:{gameData(t){return t.gameData},stepNumber(t){return t.stepNumber},actualView(t){return t.actualView},actualProperty(t){return t.actualProperty},completed(t){return t.actualProperty.completed},feedback(t){return t.feedback}},mutations:{SET_TESTDATA_TO_STATE(t,e){t.testData=e,t.testId=e.data.data.id},SET_GAMEDATA_TO_STATE(t,e){t.gameData=e},setStepNumber(t,e){t.stepNumber=e},setActualView(t,e){t.actualView=e},createEmptyPropertyList(t,e){const s=Ae.state.propertyList;if(s.length>0)return;const r=e;for(let n=0;n<r.length;n++){let t={completed:!1};if("sections"===r[n].body.type){t.viewedSections=[];for(let e=0;e<r[n].body.sections.length;e++)t.viewedSections.push(!1)}else if("answersButtons"===r[n].body.type)t.currentAnswer=null,t.numberTry=0;else if("answersCheckboxes"===r[n].body.type){t.checkboxList=[];for(let e=0;e<r[n].body.bodyCheckboxes.length;e++)t.checkboxList.push(!1);t.numberTry=0}s.push(t)}t.propertyList=s},setActualProperty(t,e){t.actualProperty=t.propertyList[e]},setCurrentAnswer(t,e){t.actualProperty.currentAnswer=e},changeAnswerCheckbox(t,e){t.actualProperty.checkboxList[e]=!t.actualProperty.checkboxList[e]},setCompleted(t,e){t.actualProperty.completed=e},setFeedbackItem(t,e){t.feedback[e.name]=e.value}},actions:{GET_DATA_FROM_API({commit:t}){return(0,ke.ZP)("http://188.225.46.190/api/v1/test/1",{method:"GET"}).then((e=>(t("SET_TESTDATA_TO_STATE",e),e.data.data.questions))).then((e=>(t("SET_GAMEDATA_TO_STATE",e),e))).then((e=>(t("createEmptyPropertyList",e),e))).then((e=>(t("setStepNumber",0),e[0].body))).then((t=>(Ae.commit("setActualView",t),0))).then((t=>{Ae.commit("setActualProperty",t)})).catch((t=>(console.log("Ошибка:"),console.log(t),t)))},SEND_DATA_TO_API(t,e){ke.ZP.post("http://188.225.46.190/api/v1/admin/answers",{question_id:t.state.gameData[t.state.stepNumber].id,test_id:t.state.testId,body:{description:e}}).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))},setStepNumber(t,e){if(t.state.stepNumber!==e)return t.commit("setStepNumber",e),t.commit("setActualProperty",e),t.dispatch("setActualView",t.state.gameData[e].body)},setActualView(t,e){t.commit("setActualView",e)},setActualProperty(t,e){t.commit("setActualProperty",e)},nextStep(t){if(t.state.stepNumber+1<t.state.gameData.length)return t.dispatch("setStepNumber",t.state.stepNumber+1)},previousStep(t){if(t.state.stepNumber>0)return t.dispatch("setStepNumber",t.state.stepNumber-1)},returnActualView(t){return t.dispatch("setActualView",t.state.gameData[t.state.stepNumber].body)},setCurrentAnswer(t,e){t.commit("setCurrentAnswer",e)},changeAnswerCheckbox(t,e){t.commit("changeAnswerCheckbox",e)},setCompleted(t,e){t.commit("setCompleted",e)},setFeedbackItem(t,e){t.commit("setFeedbackItem",e)}},modules:{}});var Te=s(4720),Pe=s.n(Te);r["default"].config.productionTip=!1,r["default"].use(Pe()),new r["default"]({store:Ae,render:t=>t(Ce)}).$mount("#app")},990:function(t,e,s){var r={"./bg.jpg":8496,"./cup.svg":3129,"./ex_1.svg":887,"./ex_1_1.jpg":9232,"./ex_1_2.jpg":9610,"./ex_2.svg":2915,"./ex_3.svg":7922,"./ex_4.svg":3825,"./ex_4_1.jpg":6401,"./ex_4_2.jpg":3426,"./ex_4_3.jpg":2540,"./ex_4_4.jpg":1593,"./game2/analysis1.png":8672,"./game2/sec1_3_1.png":93,"./game2/sec1_4_1.png":9640,"./game2/sec2_3_1.png":7752,"./star.svg":3111,"./star_full.svg":3632,"./ts_1.svg":3641,"./ts_2.svg":5750,"./ts_2_1.jpg":9092,"./ts_3.svg":9160,"./ts_3_1.jpg":5492,"./ts_3_2.jpg":7217,"./ts_4.svg":4858};function n(t){var e=a(t);return s(e)}function a(t){if(!s.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}n.keys=function(){return Object.keys(r)},n.resolve=a,t.exports=n,n.id=990},3129:function(t,e,s){"use strict";t.exports=s.p+"img/cup.3fb72a9f.svg"},887:function(t,e,s){"use strict";t.exports=s.p+"img/ex_1.09233b7a.svg"},2915:function(t,e,s){"use strict";t.exports=s.p+"img/ex_2.ac2f05a0.svg"},7922:function(t,e,s){"use strict";t.exports=s.p+"img/ex_3.ee4ee2cd.svg"},3825:function(t,e,s){"use strict";t.exports=s.p+"img/ex_4.a46160b4.svg"},3111:function(t,e,s){"use strict";t.exports=s.p+"img/star.6129ecef.svg"},3632:function(t,e,s){"use strict";t.exports=s.p+"img/star_full.8e6f570f.svg"},3641:function(t,e,s){"use strict";t.exports=s.p+"img/ts_1.0339b410.svg"},5750:function(t,e,s){"use strict";t.exports=s.p+"img/ts_2.e854429f.svg"},9160:function(t,e,s){"use strict";t.exports=s.p+"img/ts_3.69a32804.svg"},4858:function(t,e,s){"use strict";t.exports=s.p+"img/ts_4.1bed57e6.svg"},8496:function(t,e,s){"use strict";t.exports=s.p+"img/bg.38878460.jpg"},9232:function(t,e,s){"use strict";t.exports=s.p+"img/ex_1_1.2c45f01c.jpg"},9610:function(t,e,s){"use strict";t.exports=s.p+"img/ex_1_2.05ce433a.jpg"},6401:function(t,e,s){"use strict";t.exports=s.p+"img/ex_4_1.1ee2cc19.jpg"},3426:function(t,e,s){"use strict";t.exports=s.p+"img/ex_4_2.9218f416.jpg"},2540:function(t,e,s){"use strict";t.exports=s.p+"img/ex_4_3.80ae0f92.jpg"},1593:function(t,e,s){"use strict";t.exports=s.p+"img/ex_4_4.13ec2b6b.jpg"},8672:function(t,e,s){"use strict";t.exports=s.p+"img/analysis1.60cd75b5.png"},93:function(t,e,s){"use strict";t.exports=s.p+"img/sec1_3_1.36ab2351.png"},9640:function(t,e,s){"use strict";t.exports=s.p+"img/sec1_4_1.3e2c656c.png"},7752:function(t,e,s){"use strict";t.exports=s.p+"img/sec2_3_1.92340568.png"},9092:function(t,e,s){"use strict";t.exports=s.p+"img/ts_2_1.c9f9d9ca.jpg"},5492:function(t,e,s){"use strict";t.exports=s.p+"img/ts_3_1.5e627c67.jpg"},7217:function(t,e,s){"use strict";t.exports=s.p+"img/ts_3_2.516dc869.jpg"}},e={};function s(r){var n=e[r];if(void 0!==n)return n.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,s),a.exports}s.m=t,function(){var t=[];s.O=function(e,r,n,a){if(!r){var i=1/0;for(u=0;u<t.length;u++){r=t[u][0],n=t[u][1],a=t[u][2];for(var o=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(s.O).every((function(t){return s.O[t](r[c])}))?r.splice(c--,1):(o=!1,a<i&&(i=a));if(o){t.splice(u--,1);var l=n();void 0!==l&&(e=l)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[r,n,a]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var r in e)s.o(e,r)&&!s.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p=""}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,r){var n,a,i=r[0],o=r[1],c=r[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(n in o)s.o(o,n)&&(s.m[n]=o[n]);if(c)var u=c(s)}for(e&&e(r);l<i.length;l++)a=i[l],s.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return s.O(u)},r=self["webpackChunkmedtest6"]=self["webpackChunkmedtest6"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=s.O(void 0,[998],(function(){return s(8719)}));r=s.O(r)})();
//# sourceMappingURL=app.dcff3184.js.map