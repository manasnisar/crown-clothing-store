import React from 'react'
import CollectionOverview from '../../Components/CollectionsOverview/CollectionsOverview'
import {Route} from 'react-router-dom'
import CollectionPage from '../Collection/Collection'


const ShopPage = ({match})=> {
    return(
        <div>
            <Route exact path={match.path} component={CollectionOverview}/>
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
        
    )
}

export default ShopPage