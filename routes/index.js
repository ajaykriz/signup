var express = require('express');
var router = express.Router();

/* GET home page. */
let products=[
  { no:"1",
    name:"PRODUCT 1",
    category:"Mobile",
    Price:"$1000",
    Image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQucgX9fwmr0sooJL1ekUFUwuZ3GNt97zA6C2zP3NVXmPI6zQbEQIWN8YIO-3JnACWIiT_vfv_BL_8&usqp=CAc"
  },

  { no:"2",
    name:"PRODUCT 2",
    category:"Mobile",
    Price:"$1500",
    Image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR47JBPzdB62e16kzfhX4iUpTLADpwLp6TRT3KkuNFCx_Yg7AJyB0Za0-a_USYL_tuU4jHiPDN8tA&usqp=CAc"
  },
  { no:"3",
    name:"PRODUCT 3",
    category:"Mobile",
    Price:"$1100",
    Image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQucgX9fwmr0sooJL1ekUFUwuZ3GNt97zA6C2zP3NVXmPI6zQbEQIWN8YIO-3JnACWIiT_vfv_BL_8&usqp=CAc"
  },
  { no:"4",
    name:"PRODUCT 4",
    category:"Mobile",
    Price:"$1500",
    Image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR47JBPzdB62e16kzfhX4iUpTLADpwLp6TRT3KkuNFCx_Yg7AJyB0Za0-a_USYL_tuU4jHiPDN8tA&usqp=CAc"
  },
  { no:"5",
    name:"PRODUCT 5",
    category:"Mobile",
    Price:"$2000",
    Image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTjYiGukIBAC42bcUstuDIicgy5wfaCj0NI6V6MxgThVcd9qmPF-GoUl3MFpWHfP8JY0sLdgL7k8ew&usqp=CAc"
  },
  { no:"6",
    name:"PRODUCT 6",
    category:"Mobile",
    Price:"$3000",
    Image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTnDFqM9URH91yjNjDl12bLNyVYw8nsRATKtiT-FH5T2OeCTRp3n1nOnLLYoOPFxUqlQ85huqNneg&usqp=CAc"
  },
  { no:"7",
    name:"PRODUCT 7",
    category:"Mobile",
    Price:"$2000",
    Image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTjYiGukIBAC42bcUstuDIicgy5wfaCj0NI6V6MxgThVcd9qmPF-GoUl3MFpWHfP8JY0sLdgL7k8ew&usqp=CAc"
  },
  { no:"8",
    name:"PRODUCT 8",
    category:"Mobile",
    Price:"$3000",
    Image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTnDFqM9URH91yjNjDl12bLNyVYw8nsRATKtiT-FH5T2OeCTRp3n1nOnLLYoOPFxUqlQ85huqNneg&usqp=CAc"
  }


]

router.get('/',function(req,res){
  res.render('login', { products});
})

  router.post('/login',function(req,res){
    const Email="ajaykrishnan231@gmail.com"
    const Password="12345"
    if(req.body.email==Email &&req.body.password==Password){
      res.render('hompage',{products});
    }else{
      res.render('login')
    }
  })

  

  router.get('/table',function(req,res){
    res.render('table', { products});
  })
  router.get('/list',function(req,res){
    res.render('list', { products});
  })
  router.get('/login',function(req,res){
    res.render('login');
  })
  

module.exports = router;
