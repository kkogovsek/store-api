define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/carts/:item_id",
    "title": "Dodajanje izdelkov v voziček",
    "name": "Dodanjanj",
    "group": "Carts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "item_id",
            "description": "<p>Id želenega izdelka</p> "
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Količina izdelkov, ki jih želimo dodati</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "HTML/1.1",
            "description": "<p>200 Successfull</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 Successfull",
          "content": "HTTP/1.1 200 Successfull",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/carts.js",
    "groupTitle": "Carts"
  },
  {
    "type": "post",
    "url": "/api/v1/carts/remove/:item_id",
    "title": "Odstranjevanje izdelkov iz vozička",
    "name": "Odstrani",
    "group": "Carts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "item_id",
            "description": "<p>Id želenega izdelka</p> "
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Količina izdelkov, ki jih želimo odstraniti</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "HTML/1.1",
            "description": "<p>200 Successfull</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 Successfull",
          "content": "HTTP/1.1 200 Successfull",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/carts.js",
    "groupTitle": "Carts"
  },
  {
    "type": "post",
    "url": "/api/v1/carts/checkout",
    "title": "Sprememba vozička v naročilo",
    "name": "Potrdi",
    "group": "Carts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "HTML/1.1",
            "description": "<p>200 Successfull</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 Successfull",
          "content": "HTTP/1.1 200 Successfull",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/carts.js",
    "groupTitle": "Carts"
  },
  {
    "type": "get",
    "url": "/api/v1/carts/",
    "title": "Pridobi vsebino vozička",
    "name": "Vsebina",
    "group": "Carts",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "cart",
            "description": "<p>Vsebina vozička</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200 Successfull",
          "content": "HTTP/1.1 200 Successfull\n[\n\t{\n\t\titem: {\n\t\t\t_id: {String},\n\t\t\tname: {String},\n\t\t\tseller: {\n\t\t\t\t_id: {String},\n\t\t\t\tname: {String},\n\t\t\t\tsurname: {String}\n\t\t\t},\n\t\t\tquantity: {Number},\n\t\t\tprice: {Number}\n\t\t}\n\t}\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/carts.js",
    "groupTitle": "Carts"
  },
  {
    "type": "post",
    "url": "/api/v1/items/add",
    "title": "Dodajanje izdelka",
    "name": "Dodaj",
    "group": "Items",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Ime izdelka</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Opis izdelka</p> "
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": true,
            "field": "main_photo",
            "description": "<p>Glavna fotografija</p> "
          },
          {
            "group": "Parameter",
            "type": "Files",
            "optional": true,
            "field": "photos",
            "description": "<p>Ostale fotografije</p> "
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "photos_descriptions",
            "description": "<p>Opisi ostalih fotografij</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "HTTP/1.1",
            "description": "<p>200</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200",
          "content": "HTTP/1.1 200",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/items.js",
    "groupTitle": "Items"
  },
  {
    "type": "post",
    "url": "/api/v1/items/update/:item_id",
    "title": "Dodajanje izdelka",
    "name": "Dodaj",
    "group": "Items",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "item_id",
            "description": "<p>Id izdelka</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Opis izdelka</p> "
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": true,
            "field": "main_photo",
            "description": "<p>Nova glavna fotografija</p> "
          },
          {
            "group": "Parameter",
            "type": "Files",
            "optional": true,
            "field": "photos",
            "description": "<p>Nove fotografije</p> "
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "photos_descriptions",
            "description": "<p>Opisi ostalih fotografij</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "HTTP/1.1",
            "description": "<p>200</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200",
          "content": "HTTP/1.1 200",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/items.js",
    "groupTitle": "Items"
  },
  {
    "type": "post",
    "url": "/api/v1/orders/delivered/:order_id",
    "title": "Dostavljanje izdelka",
    "name": "Dostavljeno",
    "group": "Items",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>Kupec</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200",
          "content": "HTTP/1.1 200",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/orders.js",
    "groupTitle": "Items"
  },
  {
    "type": "get",
    "url": "/api/v1/items/:item_id",
    "title": "Pridobivanje izdelka in ponudb, ki so na voljo",
    "name": "Izdelek",
    "group": "Items",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "item",
            "description": "<p>Vrne izdelek in ponudbe, ki so na voljo</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200",
          "content": "HTTP/1.1 200\n{\n\t_id: {String},\n\tname: {String},\n\tdescription: {String},\n\tseller: {\n\t\t_id: {String},\n\t\tname: {String},\n\t\tsurname: {String}\n\t},\n\timage: {String},\n\tphotos: [\n\t\t{\n\t\t\timage:{String},\n\t\t\tdescription: {String}\n\t\t}\n\t],\n\toffers: [\n\t\t{\n\t\t\t_id: {String},\n\t\t\tquantity: {Number},\n\t\t\tprice: {Number},\n\t\t\tdelivery: {Date}\n\t\t}\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/items.js",
    "groupTitle": "Items"
  },
  {
    "type": "get",
    "url": "/api/v1/items/",
    "title": "Pridobivanje izdelkov, ki so na voljo",
    "name": "Izdelki",
    "group": "Items",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "items",
            "description": "<p>Vrne izdelke, ki so na voljo</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200",
          "content": "HTTP/1.1 200\n[\n\t{\n\t\t_id: {String},\n\t\tname: {String},\n\t\tseller: {\n\t\t\t_id: {String},\n\t\t\tname: {String},\n\t\t\tsurname: {String}\n\t\t},\n\t\timage: {String},\n\t\tavalible: {Number}\n\t}\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/items.js",
    "groupTitle": "Items"
  },
  {
    "type": "post",
    "url": "/api/v1/offers/add",
    "title": "Dodajanje ponudbe",
    "name": "Dodaj",
    "group": "Offers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "item_id",
            "description": "<p>Id izdelka</p> "
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Število izdelkov na zalogi</p> "
          },
          {
            "group": "Parameter",
            "type": "DateTime",
            "optional": false,
            "field": "delivery",
            "description": "<p>Datum dostave</p> "
          },
          {
            "group": "Parameter",
            "type": "DateTime",
            "optional": false,
            "field": "end",
            "description": "<p>Čas zaključka ponudbe</p> "
          },
          {
            "group": "Parameter",
            "type": "DateTime",
            "optional": false,
            "field": "start",
            "description": "<p>Čas začetka ponudbe</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "HTTP/1.1",
            "description": "<p>200</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200",
          "content": "HTTP/1.1 200",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/offers.js",
    "groupTitle": "Offers"
  },
  {
    "type": "get",
    "url": "/api/v1/offers/:item_id",
    "title": "Pridobivanje ponudb za izdelek, ki so na voljo",
    "name": "Pridobi",
    "group": "Offers",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "items",
            "description": "<p>Vrne ponudbe, ki so na voljo</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200",
          "content": "HTTP/1.1 200\n[\n\t{\n\t\t_id: {String},\n\t\tdelivery: {DateTime},\n\t\tavalibile: {Number}\n\t}\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/offers.js",
    "groupTitle": "Offers"
  },
  {
    "type": "get",
    "url": "/api/v1/orders/my",
    "title": "Pridobivanje mojih naročil",
    "name": "Na_poti",
    "group": "Orders",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>Kupec</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "items",
            "description": "<p>Vrne naročila</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200",
          "content": "HTTP/1.1 200\n[\n\t{\n\t\titem: {\n\t\t\t_id: {String},\n\t  \t\tname: {String},\n\t\t\tseller: {\n\t\t\t\t_id: {String},\n\t\t\t\tname: {String},\n\t\t\t\tsurname: {String}\n\t\t\t},\n\t\t\tquantity: {Number},\n\t\t\tdelivery: {Date}\n\t\t}\n\t}\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/orders.js",
    "groupTitle": "Orders"
  },
  {
    "type": "get",
    "url": "/api/v1/orders/",
    "title": "Pridobivanje naročil mojih izdelkov",
    "name": "Za_dostavo",
    "group": "Orders",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>Prodajalec</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "items",
            "description": "<p>Vrne naročila</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200",
          "content": "HTTP/1.1 200\n[\n\t{\n\t\titem: {\n\t\t\t_id: {String},\n\t  \t\tname: {String},\n\t\t\tbuyer: {\n\t\t\t\t_id: {String},\n\t\t\t\tname: {String},\n\t\t\t\tsurname: {String}\n\t\t\t},\n\t\t\tquantity: {Number},\n\t\t\tdelivery: {Date}\n\t\t}\n\t}\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/orders.js",
    "groupTitle": "Orders"
  },
  {
    "type": "get",
    "url": "/api/v1/payments/my",
    "title": "Pridobivanje mojih plačil",
    "name": "Pla_al",
    "group": "Payments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>Kupec</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "items",
            "description": "<p>Vrne plačila</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200",
          "content": "HTTP/1.1 200\n[\n\t{\n\t\titem: {\n\t\t\t_id: {String},\n\t\t\treciever: {\n\t\t\t\t_id: {String},\n\t\t\t\tname: {String},\n\t\t\t\tsurname: {String}\n\t\t\t},\n\t\t\tquantity: {Number}\n\t\t}\n\t}\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/payments.js",
    "groupTitle": "Payments"
  },
  {
    "type": "post",
    "url": "/api/v1/payments/:user_id",
    "title": "Plačilo uporabnika",
    "name": "Pla_ano",
    "group": "Payments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>Kupec</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "HTTP/1.1 200",
          "content": "HTTP/1.1 200",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/payments.js",
    "groupTitle": "Payments"
  },
  {
    "type": "get",
    "url": "/api/v1/orders/",
    "title": "Pridobivanje plačil meni",
    "name": "Pla_ano_meni",
    "group": "Payments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>Prodajalec</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "items",
            "description": "<p>Vrne naročila</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200",
          "content": "HTTP/1.1 200\n[\n\t{\n\t\titem: {\n\t\t\t_id: {String},\n\t  \t\tname: {String},\n\t\t\tsender: {\n\t\t\t\t_id: {String},\n\t\t\t\tname: {String},\n\t\t\t\tsurname: {String}\n\t\t\t},\n\t\t\tquantity: {Number}\n\t\t}\n\t}\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/payments.js",
    "groupTitle": "Payments"
  },
  {
    "type": "get",
    "url": "/api/v1/payments/balance",
    "title": "Pridobivanje mojega stanja",
    "name": "Stanje",
    "group": "Payments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>Me</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "items",
            "description": "<p>Vrne naročila</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "HTTP/1.1 200",
          "content": "HTTP/1.1 200\n{\n\tbalance: {Number}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api/v1/payments.js",
    "groupTitle": "Payments"
  }
] });