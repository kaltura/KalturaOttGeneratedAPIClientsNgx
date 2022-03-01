
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaProgramAssetGroupOfferFilter, KalturaProgramAssetGroupOfferFilterArgs } from './KalturaProgramAssetGroupOfferFilter';

export interface KalturaProgramAssetGroupOfferIdInFilterArgs  extends KalturaProgramAssetGroupOfferFilterArgs {
    idIn? : string;
}


export class KalturaProgramAssetGroupOfferIdInFilter extends KalturaProgramAssetGroupOfferFilter {

    idIn : string;

    constructor(data? : KalturaProgramAssetGroupOfferIdInFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaProgramAssetGroupOfferIdInFilter' },
				idIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaProgramAssetGroupOfferIdInFilter'] = KalturaProgramAssetGroupOfferIdInFilter;