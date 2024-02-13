function fun1(x) {return 0.0397866332969219*x*x + 0.870286790735707*x - 5.06466816308718;  }
function fun2(x) {return 0.0413560704070188*x*x - 0.303428931625094*x + 3.83770016377207;}
function fun3(x) {return -0.000235813524296025*x*x*x + 0.032364683465572*x*x - 0.529332414754694*x + 5.45236678973705;}
function fun4(x) {return 0.00620262446745462*x*x - 0.0904256252327048*x + 2.05138555902935;}


		function plotGraph() { 
			const graph = document.getElementById('graph'); 
			graph.innerHTML = ''; 

			const functionInput1 = 
				'0.0397866332969219*x*x + 0.870286790735707*x - 5.06466816308718'; 
			const expr1 = math.parse(functionInput1).compile(); 
			const functionInput2 = 
				'0.0413560704070188*x*x - 0.303428931625094*x + 3.83770016377207'; 
			const expr2 = math.parse(functionInput2).compile(); 
			const functionInput3 = 
				'-0.000235813524296025*x*x*x + 0.032364683465572*x*x - 0.529332414754694*x + 5.45236678973705'; 
			const expr3 = math.parse(functionInput3).compile(); 
			const functionInput4 = 
				'0.00620262446745462*x*x - 0.0904256252327048*x + 2.05138555902935'; 
			const expr4 = math.parse(functionInput4).compile(); 


			const xValues = math.range(10, 40, 0.01)._data; 
			const yValues1 = xValues.map(x => expr1.evaluate({ x })); 
			const yValues2 = xValues.map(x => expr2.evaluate({ x })); 
			const yValues3 = xValues.map(x => expr3.evaluate({ x })); 
			const yValues4 = xValues.map(x => expr4.evaluate({ x })); 

			const trace1 = { 
				x: xValues, 
				y: yValues1, 
				type: 'scatter', 
				mode: 'lines', 
        name: '5g',
			};
			const trace2 = { 
				x: xValues, 
				y: yValues2, 
				type: 'scatter', 
				mode: 'lines',
        name: '10g', 
			};
			const trace3 = { 
				x: xValues, 
				y: yValues3, 
				type: 'scatter', 
				mode: 'lines',
        name: '20g', 
			};

			const trace4 = { 
				x: xValues, 
				y: yValues4, 
				type: 'scatter', 
				mode: 'lines',
        name: '50g', 
			}; 

			const layout = { 
				xaxis: { title: 'RATE OF DESCENT FT/S' }, 
				yaxis: { title: 'REQ. EFFECTIVE DESCELERATION STROKES inch' }, 
			}; 

			Plotly.newPlot(graph, [trace1, trace2, trace3, trace4], layout); 
		} 


function calcular() {
    var input1 = document.getElementById("inputNumber").value;
    var input2 = document.getElementById("inputNumber2").value;
    var input3 = document.getElementById("inputNumber3").value;
    var input4 = document.getElementById("inputNumber4").value;
  
    var resultado1 = input1 * 2;
    var resultado2 = input2 * 4;
    var resultado3 = input3 * 8;
    var resultado4 = input4 * 16;
    
    document.getElementById("resultado1").innerText = "El resultado 2 es: " + resultado1;
    document.getElementById("resultado2").innerText = "El resultado 2 es: " + resultado2;
    document.getElementById("resultado3").innerText = "El resultado 3 es: " + resultado3;
    document.getElementById("resultado4").innerText = "El resultado 4 es: " + resultado4;
  
    document.getElementById("resultados").style.display = "table-row";
  }