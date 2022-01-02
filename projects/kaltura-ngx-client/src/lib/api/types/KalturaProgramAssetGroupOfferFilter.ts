
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaProgramAssetGroupOfferFilterArgs  extends KalturaFilterArgs {
    alsoInactive? : boolean;
}


export class KalturaProgramAssetGroupOfferFilter extends KalturaFilter {

    alsoInactive : boolean;

    constructor(data? : KalturaProgramAssetGroupOfferFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaProgramAssetGroupOfferFilter' },
				alsoInactive : { type : 'b' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaProgramAssetGroupOfferFilter'] = KalturaProgramAssetGroupOfferFilter;