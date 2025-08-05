// Javascript document
$(document).ready(function(){



/* UFAK CİHAZLAR İÇİN MENU AÇMA BUTONUNUN İŞLEMLERİ >>>>>*/ 
$("#HeaderMenuAcmaButonuAlani").on("click", function(){
    $("#HeaderMenuAcmaButonuMenuSinirlamaAlani").slideToggle("slow");
});
/* UFAK CİHAZLAR İÇİN MENU AÇMA BUTONUNUN İŞLEMLERİ <<<<<*/

/* MAİN ALANI İÇİN ÜSTTEN BOŞLUK HESPLAMALARI >>>> */
var DokumanGenisligi		=	$(window).outerWidth();
	
	if(!$("#HeaderMesajAlani").length){
	   if(DokumanGenisligi>=1200){ /* XL */
		  var OsfetDegeri		=	108;
	   }else if((DokumanGenisligi>=992) && (DokumanGenisligi<=1199)){ /* L */
		  var OsfetDegeri		=	98;
	   }else if((DokumanGenisligi>=768) && (DokumanGenisligi<=991)){ /* M */
		  var OsfetDegeri		=	94;
	   }else if((DokumanGenisligi>=576) && (DokumanGenisligi<=767)){ /* S */
		  var OsfetDegeri		=	80;
	   }else if(DokumanGenisligi<=574){ /* XL */
		  var OsfetDegeri		=	105;
	   }
	}else{
	   if(DokumanGenisligi>=1200){ /* XL */
		  var OsfetDegeri		=	127;
	   }else if((DokumanGenisligi>=992) && (DokumanGenisligi<=1199)){ /* L */
		  var OsfetDegeri		=	131;
	   }else if((DokumanGenisligi>=768) && (DokumanGenisligi<=991)){ /* M */
		  var OsfetDegeri		=	105;
	   }else if((DokumanGenisligi>=576) && (DokumanGenisligi<=767)){ /* S */
		  var OsfetDegeri		=	105;
	   }else if(DokumanGenisligi<=574){ /* XL */
		  var OsfetDegeri		=	83;
	   }
	}
    $("main").css("top", OsfetDegeri);
    $("footer").css("top", OsfetDegeri);   

    $(window).resize(function(){
var DokumanGenisligi		=	$(window).outerWidth();
	
	if(!$("#HeaderMesajAlani").length){
	   if(DokumanGenisligi>=1200){ /* XL */
		  var OsfetDegeri		=	108;
	   }else if((DokumanGenisligi>=992) && (DokumanGenisligi<=1199)){ /* L */
		  var OsfetDegeri		=	98;
	   }else if((DokumanGenisligi>=768) && (DokumanGenisligi<=991)){ /* M */
		  var OsfetDegeri		=	88;
	   }else if((DokumanGenisligi>=576) && (DokumanGenisligi<=767)){ /* S */
		  var OsfetDegeri		=	78;
	   }else if(DokumanGenisligi<=574){ /* XL */
		  var OsfetDegeri		=	78;
	   }
	}else{
	   if(DokumanGenisligi>=1200){ /* XL */
		  var OsfetDegeri		=	148;
	   }else if((DokumanGenisligi>=992) && (DokumanGenisligi<=1199)){ /* L */
		  var OsfetDegeri		=	138;
	   }else if((DokumanGenisligi>=768) && (DokumanGenisligi<=991)){ /* M */
		  var OsfetDegeri		=	118;
	   }else if((DokumanGenisligi>=576) && (DokumanGenisligi<=767)){ /* S */
		  var OsfetDegeri		=	108;
	   }else if(DokumanGenisligi<=574){ /* XL */
		  var OsfetDegeri		=	103;
	   }
	}
    $("main").css("top", OsfetDegeri);
    $("footer").css("top", OsfetDegeri); 
        
    })

/* MAİN ALANI İÇİN ÜSTTEN BOŞLUK HESPLAMALARI <<<<*/

})