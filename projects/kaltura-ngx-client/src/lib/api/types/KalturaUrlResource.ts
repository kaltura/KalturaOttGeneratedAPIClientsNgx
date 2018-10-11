
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaContentResource, KalturaContentResourceArgs } from './KalturaContentResource';

export interface KalturaUrlResourceArgs  extends KalturaContentResourceArgs {
    url? : string;
}


export class KalturaUrlResource extends KalturaContentResource {

    url : string;

    constructor(data? : KalturaUrlResourceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUrlResource' },
				url : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUrlResource'] = KalturaUrlResource;