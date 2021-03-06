
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaEncryption } from './KalturaEncryption';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaDataEncryptionArgs  extends KalturaObjectBaseArgs {
    username? : KalturaEncryption;
}


export class KalturaDataEncryption extends KalturaObjectBase {

    username : KalturaEncryption;

    constructor(data? : KalturaDataEncryptionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDataEncryption' },
				username : { type : 'o', subTypeConstructor : KalturaEncryption, subType : 'KalturaEncryption' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaDataEncryption'] = KalturaDataEncryption;