
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaAssetEvent, KalturaAssetEventArgs } from './KalturaAssetEvent';

export interface KalturaProgramAssetEventArgs  extends KalturaAssetEventArgs {
    
}


export class KalturaProgramAssetEvent extends KalturaAssetEvent {

    readonly liveAssetId : number;

    constructor(data? : KalturaProgramAssetEventArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaProgramAssetEvent' },
				liveAssetId : { type : 'n', readOnly : true }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaProgramAssetEvent'] = KalturaProgramAssetEvent;