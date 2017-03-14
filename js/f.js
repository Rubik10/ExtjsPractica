Ext.onReady(function() {

  Ext.create('Ext.grid.Panel', {

      xtype: 'cell-editing',
      title: 'Edit Plants',
      frame: true,
      renderTo: Ext.getBody(),
              width: 680,
              height: 350,
              columns: [{
                  header: 'Common Name',
                  dataIndex: 'common',
                  flex: 1,
                  editor: {
                      allowBlank: false
                  }
              }, {
                  header: 'Light',
                  dataIndex: 'light',
                  width: 130,
                  editor: new Ext.form.field.ComboBox({
                      typeAhead: true,
                      triggerAction: 'all',
                      store: [
                          ['Shade','Shade'],
                          ['Mostly Shady','Mostly Shady'],
                          ['Sun or Shade','Sun or Shade'],
                          ['Mostly Sunny','Mostly Sunny'],
                          ['Sunny','Sunny']
                      ]
                  })
              }, {
                  header: 'Price',
                  dataIndex: 'price',
                  width: 70,
                  align: 'right',
                  renderer: 'usMoney',
                  editor: {
                      xtype: 'numberfield',
                      allowBlank: false,
                      minValue: 0,
                      maxValue: 100000
                  }
              }, {
                  header: 'Available',
                  dataIndex: 'availDate',
                  width: 95,
                  renderer: Ext.util.Format.dateRenderer('M d, Y'),
                  editor: {
                      xtype: 'datefield',
                      format: 'm/d/y',
                      minValue: '01/01/06',
                      disabledDays: [0, 6],
                      disabledDaysText: 'Plants are not available on the weekends'
                  }
              }, {
                  xtype: 'checkcolumn',
                  header: 'Indoor?',
                  dataIndex: 'indoor',
                  width: 90,
                  stopSelection: false
              }, {
                  xtype: 'actioncolumn',
                  width: 30,
                  sortable: false,
                  menuDisabled: true,
                  items: [{
                      icon: 'resources/images/icons/fam/delete.gif',
                      tooltip: 'Delete Plant'

                  }]
              }],
              tbar: [{
                  text: 'Add Plant'

              }]
          });
        });
