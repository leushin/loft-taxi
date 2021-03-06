import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import mapboxgl from 'mapbox-gl';
import styles from './MapStyles';
import { withStyles } from '@material-ui/core/styles';
import { getCoords, getIsOrderMade } from '../../modules/Coords';
import Order from "../Order";

class Map extends Component {
    map = null;
    mapContainer = React.createRef();
  
    componentDidMount() {
      mapboxgl.accessToken = "pk.eyJ1IjoicmFpdG8ta3VuIiwiYSI6ImNqcmt2endkeDAyMmk0OW80bDZzY2EzbXYifQ.A7CSFZjX6CDaAQrA2H4QbQ";
      this.map = new mapboxgl.Map({
        container: this.mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v9",
        center: [30.2656504, 59.8029126],
        zoom: 15
      });
    }

    componentDidUpdate(prevProps) {
        const { isOrderMade, orderCoords } = this.props;
        
        if (!isOrderMade && this.map.getLayer('route')) {
            this.map.removeLayer('route');
            this.map.removeSource('route');
        }
        
        if (isOrderMade && orderCoords && orderCoords.length > 0) {
            if (prevProps.orderCoords !== orderCoords) {
                this.renderRoute();
            }
        }
        
    }

    renderRoute = () => {
        const { orderCoords } = this.props;
        this.map.addLayer({
            id: 'route',
            type: 'line',
            source: {
                type: 'geojson',
                data: {
                    type: 'Feature',
                    properties: {
                        color: '#F7455D' 
                    },
                    geometry: {
                        type: 'LineString',
                        coordinates: orderCoords
                    }
                }
            }, 
            paint: {
                'line-width': 8,
                'line-color': ['get', 'color']
            }
        });

        this.map.flyTo({
            center: orderCoords[0]
        })
    };
  
    componentWillUnmount() {
		this.map.remove();
    }
  
    render() {
		const { classes } = this.props;
		return (
			<Fragment>
				<Order />
				<div className={classes.container} ref={this.mapContainer} />;
			</Fragment>
		)
    }
}

const mapStateToProps = state => ({
    orderCoords: getCoords(state),
    isOrderMade: getIsOrderMade(state)
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Map));