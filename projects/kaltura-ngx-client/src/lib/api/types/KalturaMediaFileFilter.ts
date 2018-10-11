
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaMediaFileFilterArgs  extends KalturaFilterArgs {
    assetIdEqual? : number;
	idEqual? : number;
}


export class KalturaMediaFileFilter extends KalturaFilter {

    assetIdEqual : number;
	idEqual : number;

    constructor(data? : KalturaMediaFileFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMediaFileFilter' },
				assetIdEqual : { type : 'n' },
				idEqual : { type : 'n' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaMediaFileFilter'] = KalturaMediaFileFilter;