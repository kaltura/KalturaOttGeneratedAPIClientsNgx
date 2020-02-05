
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaRegionFilterArgs  extends KalturaFilterArgs {
    externalIdIn? : string;
	idIn? : string;
	parentIdEqual? : number;
	liveAssetIdEqual? : number;
	parentOnly? : boolean;
}


export class KalturaRegionFilter extends KalturaFilter {

    externalIdIn : string;
	idIn : string;
	parentIdEqual : number;
	liveAssetIdEqual : number;
	parentOnly : boolean;

    constructor(data? : KalturaRegionFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaRegionFilter' },
				externalIdIn : { type : 's' },
				idIn : { type : 's' },
				parentIdEqual : { type : 'n' },
				liveAssetIdEqual : { type : 'n' },
				parentOnly : { type : 'b' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaRegionFilter'] = KalturaRegionFilter;