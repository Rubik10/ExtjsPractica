


  //  Ext.QuickTips.init();

  Ext.onReady(function(){
              var formulario = new Ext.form.FormPanel({
              <!-- formulario nombre de la variable, Ext.FormPanel funcion que indica que queremos un formulario -->
              standardSubmit: true,
              renderTo: document.body,<!-- donde pondremos el formulario -->
              <!-- si tuviesemos un div donde quisieramos poner el formulario seria(mirar ultima linea)  -->
              frame: true,<!-- lo queremos como ventana -->
              title: 'Registro de clientes',<!-- titulo de la ventana -->
              width: 250,<!-- ancho del formulario -->
              heigth: 650,<!-- ancho del formulario -->
              x: 500,<!-- 'x' y 'y', una posicion en la ventana -->
              y: 100,
              floating: true,<!-- decir que puede tomar cualquier posicion en la ventana -->
              items: [{<!-- items hace referencia a los campos del formulario es un vector -->
                          xtype: 'textfield',<!--xtype tipo del campo -->
                          fieldLabel: 'Nombre',<!--fieldLabel texto del campo -->
                          name: 'nombre'<!--name nombre del campo -->
                      },{
                          xtype: 'textfield',<!--xtype puede ser textfield, datefield, timefield, numberfield, combo, textarea-->
                          fieldLabel: 'Apellido',
                          name: 'apellido'
                      },{
                          xtype: 'datefield',
                          fieldLabel: 'Fecha de nacimiento',
                          name: 'fecha'
                      }],
                      <!-- en es es un vector precedido de la palabra buttons: para especificar -->
                      <!-- que este vector son los botones del formulario en este caso el submit-->
              buttons: [{
                          text: 'Guardar'
                      }]
              });
          });

           <!-- formulario.render('divFormulario'); -->
