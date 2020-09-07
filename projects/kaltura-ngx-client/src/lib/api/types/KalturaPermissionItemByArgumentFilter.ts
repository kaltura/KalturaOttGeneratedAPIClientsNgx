
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaPermissionItemByApiActionFilter, KalturaPermissionItemByApiActionFilterArgs } from './KalturaPermissionItemByApiActionFilter';

export interface KalturaPermissionItemByArgumentFilterArgs  extends KalturaPermissionItemByApiActionFilterArgs {
    parameterEqual? : string;
}


export class KalturaPermissionItemByArgumentFilter extends KalturaPermissionItemByApiActionFilter {

    parameterEqual : string;

    constructor(data? : KalturaPermissionItemByArgumentFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPermissionItemByArgumentFilter' },
				parameterEqual : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPermissionItemByArgumentFilter'] = KalturaPermissionItemByArgumentFilter;