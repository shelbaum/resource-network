var stylesheet = [
			{
				selector: 'edge',
				style: {
					'target-arrow-shape': 'triangle-backcurve',
					'curve-style': 'bezier',
					'arrow-scale': '2'
				}
            },
            {
            	selector: 'edge:selected',
            	style: {
            		'label': 'data(interaction)'
            	}
            },{
                selector: 'node',
                style: {
                    shape: 'hexagon',
                    label: 'data(shared_name)',
                    width: 'mapData(EdgeCount, 0, 9, 27, 100)',
                    height: 'mapData(EdgeCount, 0, 9, 27, 100)'
                }
            },{
                selector: 'node[type="Legislative"]',
                style: {
                    'background-color': 'blue'
                }
            },{
                selector: 'node[type="Executive"]',
                style: {
                    'background-color': 'green'
                }
            },{
                selector: 'node[type="Researcher-generated"]',
                style: {
                    'background-color': 'red'
                }
            },{
                selector: '.unfocused',
                style: {
                    display: 'none'
                }
            }]