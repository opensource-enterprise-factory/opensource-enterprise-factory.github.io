"use strict";
(function(){
  const form=document.getElementById("business-inquiry");if(!form)return;
  const feedback=document.getElementById("form-feedback"), prepared=document.getElementById("prepared");
  const en=document.documentElement.lang==="en";
  const params=new URLSearchParams(location.search);
  const type=params.get("type");if(["esn","cloud","enterprise","other"].includes(type))form.elements.type.value=type;
  const topics={"workplace":"Digital Workplace","support":"Support Enterprise","pep21":en?"PEP-21 pilot":"Pilote PEP-21"};
  const topic=params.get("topic");if(topic&&topics[topic]){const opts=Array.from(form.elements.topic.options);const found=opts.find(o=>o.textContent.toLowerCase().includes(topic==="pep21"?"pep-21":topics[topic].toLowerCase()));if(found)form.elements.topic.value=found.value;}
  function message(){const v=n=>form.elements[n].value.trim();return [en?"OSEF BUSINESS INQUIRY":"DEMANDE DE COLLABORATION OSEF","", (en?"Partner type: ":"Type de partenaire : ")+form.elements.type.options[form.elements.type.selectedIndex].text,(en?"Organization: ":"Organisation : ")+v("company"),(en?"Contact: ":"Contact : ")+v("person"),"Email: "+v("email"),(en?"Country: ":"Pays : ")+v("country"),(en?"Subject: ":"Objet : ")+v("topic"),(en?"Timeframe: ":"Horizon : ")+v("timeframe"),"",en?"Needs / scope:":"Besoin / périmètre :",v("details")].join("\n");}
  form.addEventListener("submit",async function(event){event.preventDefault();
    if(!form.checkValidity()){feedback.textContent=en?"Please fill in the required fields and provide a valid email.":"Complétez les champs obligatoires et saisissez une adresse e-mail valide.";form.reportValidity();return;}
    prepared.value=message();try{if(!navigator.clipboard||!navigator.clipboard.writeText)throw Error("Clipboard unavailable");await navigator.clipboard.writeText(prepared.value);feedback.textContent=en?"Inquiry copied. No message was submitted to OSEF; send it using a separately agreed private channel.":"Demande copiée. Aucun message n'a été transmis à OSEF ; envoyez-le par un canal privé convenu séparément.";}catch(err){feedback.textContent=en?"Select the prepared text below and copy it manually. No message was sent.":"Sélectionnez et copiez manuellement le texte ci-dessous. Aucun message n'a été envoyé.";prepared.focus();prepared.select();}
  });
  form.addEventListener("reset",()=>{prepared.value="";feedback.textContent=en?"No information was submitted or stored.":"Aucune information transmise ni enregistrée.";});
})();
