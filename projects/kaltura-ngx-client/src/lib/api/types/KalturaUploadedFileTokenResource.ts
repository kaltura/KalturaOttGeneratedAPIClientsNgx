
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaContentResource, KalturaContentResourceArgs } from './KalturaContentResource';

export interface KalturaUploadedFileTokenResourceArgs  extends KalturaContentResourceArgs {
    token? : string;
}


export class KalturaUploadedFileTokenResource extends KalturaContentResource {

    token : string;

    constructor(data? : KalturaUploadedFileTokenResourceArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUploadedFileTokenResource' },
				token : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUploadedFileTokenResource'] = KalturaUploadedFileTokenResource;