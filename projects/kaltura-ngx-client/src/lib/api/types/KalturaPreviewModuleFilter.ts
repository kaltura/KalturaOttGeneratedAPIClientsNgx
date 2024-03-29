
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaPreviewModuleFilterArgs  extends KalturaFilterArgs {
    idIn? : string;
}


export class KalturaPreviewModuleFilter extends KalturaFilter {

    idIn : string;

    constructor(data? : KalturaPreviewModuleFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPreviewModuleFilter' },
				idIn : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPreviewModuleFilter'] = KalturaPreviewModuleFilter;