import { Component } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { Client } from '@c8y/client';

// Could not find a declaration file for module 'basic-auth'.
import { BasicAuth } from 'basic-auth';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'playground';

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    // tooltips: {
    //   callbacks: {
    //     afterLabel: function(tooltipItem) {
    //       return "%";
    //     }
    //   }
    // },
    multiTooltipTemplate: function(label)
    {
      return label.label + ":" + label.value +  "%";
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: 
      [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          ticks: {
            // Include a dollar sign in the ticks
            callback: function(value, index, values) {
                return value + "%";
            }
          },
          gridLines:
          {
            display:false
          }
        }
      ]
        }
  };
  // public database = { dataValues: [] };
  // public client = new Client(new BasicAuth({
  //   user: 'Basaad102@gmail.com', 
  //   password: 'IoT0501974798',   
  //   tenant: 'basaad'         
  // }), 'basaad.eu-latest.cumulocity.com'); 

  // public newData = this.client.inventory.list();
  //  console.log('Login with admin:password successful');
  //  console.log(data);


  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', type: 'line'},
    {data: [1, 2, 3, 4, 5, 6, 7], label: 'Series B'},
    {data: [94, 26, 73, 8, 21, 6], label: 'Aziz', type: 'line', yAxisID: 'y-axis-1'}//,
    // {data: this.newData, label: 'test', type: 'line', yAxisID: 'y-axis-1'}
    
  ];


}


// serverUrl   = "basaad.eu-latest.cumulocity.com"
// clientId    = "1211f8eb2f5e4f718a1b499d63898fb6"
// tenant      = "basaad"
// username    = "Basaad102@gmail.com"
// password    = "IoT0501974798"


// var database = { dataValues: [] };

// const client = new Client(new BasicAuth({
//     user: 'Basaad102@gmail.com', 
//     password: 'IoT0501974798',   
//     tenant: 'basaad'         
//   }), 'basaad.eu-latest.cumulocity.com'); 
//   try {
//    const data = client.inventory.list();
//    console.log('Login with admin:password successful');
//    console.log(data);

//     // database.products.push(data);

//   } catch(ex) {
//    console.log('Login failed: ', ex)
//   }
// // console.log(JSON.stringify(data));