Ext.onReady(function(){
  var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
  var formulario2 = new Ext.form.FormPanel({
  standardSubmit: true,
  closable :true,
  collapsible:true,
  renderTo: document.body,
  frame: true,
  title: 'Registro de cliente',
  width: 350,
  height: 200,
  x: 500,
  y: 0,
  floating: true,
  items: [{
              xtype: 'textfield',
              fieldLabel: 'Nombre',
              name: 'Nombre',
              afterLabelTextTpl: required,
              allowBlank: false,
              vtype:'alpha'
          },{
              xtype: 'textfield',
              fieldLabel: 'Apellido',
              name: 'Apellido',
              afterLabelTextTpl: required,
              allowBlank: false,
              vtype:'alpha'
          },{

              fieldLabel: 'Email',
              afterLabelTextTpl: required,
              name: 'Email',
              allowBlank: false,
              xtype:'textfield',
              vtype:'email'
          },{
              xtype: 'textfield',
              fieldLabel: 'Telefono',
              name: 'Telefono',
              afterLabelTextTpl: required,
              allowBlank: false
          }],

  buttons: [{
              text: 'Guardar',
              handler:
              function(obj) {
                var validate =  this.up('form').getForm().isValid();
                if (validate==false) {

                } else {
                  var Nombre = obj.up('form').down('[name=Nombre]').getValue();
                  var Apellido = obj.up('form').down('[name=Apellido]').getValue();
                  var Email = obj.up('form').down('[name=Email]').getValue();
                  var Telefono = obj.up('form').down('[name=Telefono]').getValue();
                  Ext.Ajax.request({
                  url: 'php/Insertar.php',
                  params: {
                  Nombre:Nombre,
                  Apellido:Apellido,
                  Email:Email,
                  Telefono:Telefono
                  },
                  success: function(response){
                      var text = response.responseText;

                  }
                  });
                }

              }
          }]
  });

  var formulario = new Ext.form.FormPanel({
  standardSubmit: true,
  headerPosition :'top',
  titleCollapse : true,
  collapsible:true,
  colapsable : true,
  closable :true,
  renderTo: document.body,
  frame: true,
  title: 'Registro de compra',
  width: 350,
  height: 200,
  x: 500,
  y: 200,
  floating: true,
  items: [{
              xtype: 'textfield',
              fieldLabel: 'Marca de pc',
              name: 'Marca',
              afterLabelTextTpl: required,
              allowBlank: false
          },{
              xtype: 'textfield',
              fieldLabel: 'Ram (Mb)',
              name: 'Ram',
              afterLabelTextTpl: required,
              allowBlank: false
          },{
              xtype: 'datefield',
              fieldLabel: 'Fecha de compra',
              name: 'FechaCompra',
              afterLabelTextTpl: required,
              allowBlank: false
          },{
            xtype: 'combo',
            fieldLabel: 'Usuarios',
            afterLabelTextTpl: required,
            allowBlank: false,
            displayField:'Nombre',
            valueField: 'id',
            name: 'Usuario',
            store: new Ext.data.JsonStore({
              proxy: {
            type: 'ajax',
            url: 'php/MostrarCliente.php',
            reader: {
                type: 'json',
                root: 'clientes',
                idProperty: 'id'
            }
        },
              fields:['id','Nombre', 'Apellido'],
              autoLoad: false
            })
          }],

  buttons: [{
              text: 'Guardar',
              handler:
              function(obj) {
                var validate =  this.up('form').getForm().isValid();
                 if (validate==false) {
                 }else{
                var Marca = obj.up('form').down('[name=Marca]').getValue();
                var Ram = obj.up('form').down('[name=Ram]').getValue();
                var FechaCompra = obj.up('form').down('[name=FechaCompra]').getValue();
                var Usuario = obj.up('form').down('[name=Usuario]').getValue();
                Ext.Ajax.request({
                url: 'php/InBd.php',
                params: {
                Marca:Marca,
                Ram:Ram,
                FechaCompra:FechaCompra,
                Usuario:Usuario
                },
                success: function(response){
                    var text = response.responseText;

                }
                });
              }
              }
          }]
  });

/*
  var ctn;
  Ext.Ajax.request({
  url: '../php/Mostrar.php',
  params: {

  },
  success: function(response){
      var text = response.responseText;
      ctn = response.responseText;

  },
  async:false
  });
*/

//carga de json en Grilla por medio de store
  var Grid1Store = new Ext.data.JsonStore({
  fields:['id', 'Nombre','Apellido','Email','Telefono'],
  autoLoad: true,
  proxy:{
    type:'ajax',
    url:'php/MostrarCliente.php',
    reader:{
         root:'clientes'
        }
    }

});
Ext.create('Ext.grid.Panel', {
        title: 'Clientes',
        store: Grid1Store,
        collapsible:true,/*
        dockedItems: [{
    xtype: 'toolbar',
    dock: 'bottom',
    ui: 'footer',
    items: [
        { xtype: 'component', flex: 1 },
        {
          xtype: 'button',
          text: 'Button 1',
          handler: function(){
            formulario

        }
      }
    ]
}],*/
        columns: [
            { text: 'Id',  dataIndex: 'id' },
            { text: 'Nombre', dataIndex: 'Nombre'},
            { text: 'Apellido', dataIndex: 'Apellido' },
            { text: 'Email', dataIndex: 'Email' },
            { text: 'Telefono', dataIndex: 'Telefono' }
        ],
        height: 200,
        width: 500,
        renderTo: Ext.getBody()
    });
    var Grid2Store = new Ext.data.JsonStore({
    fields:['id', 'Marca' ,'Ram','FechaCompra','Nombre','Apellido'],
    autoLoad: true,
    proxy:{
      type:'ajax',
      url:'php/MostrarCompra.php',
      reader:{
           root:'compra'
          }
      }

  });
  Ext.create('Ext.grid.Panel', {
          title: 'Compra',
          store: Grid2Store,
          collapsible:true,
          columns: [
              { text: 'Id',  dataIndex: 'id' },
              { text: 'Marca', dataIndex: 'Marca'},
              { text: 'Ram', dataIndex: 'Ram' },
              { text: 'FechaCompra', dataIndex: 'FechaCompra' },
              { text: 'Nombre', dataIndex: 'Nombre' },
              { text: 'Apellido', dataIndex: 'Apellido' }
          ],
          height: 200,
          width: 500,
          renderTo: Ext.getBody()
      });

});
