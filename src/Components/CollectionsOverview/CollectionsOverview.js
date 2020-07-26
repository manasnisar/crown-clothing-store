import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect"
import {selectCollectionsForPreview} from '../../redux/shop/shop-selectors'
import Collection from '../PreviewCollection/Collection'

import './CollectionOverview.scss'

const CollectionOverview = ({shopItems}) => {
    return(
        <div className='shop-page'>
            
            {
                shopItems.map(({id , ...otherProps}) => (
                    <Collection key={id} {...otherProps}/>
                ))
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    shopItems: selectCollectionsForPreview
})


export default connect(
    mapStateToProps
)(CollectionOverview)