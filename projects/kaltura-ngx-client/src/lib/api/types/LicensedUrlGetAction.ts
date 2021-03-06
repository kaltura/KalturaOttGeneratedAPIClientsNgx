
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaLicensedUrl } from './KalturaLicensedUrl';

import { KalturaLicensedUrlBaseRequest } from './KalturaLicensedUrlBaseRequest';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface LicensedUrlGetActionArgs  extends KalturaRequestArgs {
    request : KalturaLicensedUrlBaseRequest;
}

/**
 * Build request payload for service 'licensedUrl' action 'get'.
 *
 * Usage: Get the URL for playing an asset - program, media or recording
 *
 * Server response type:         KalturaLicensedUrl
 * Server failure response type: KalturaAPIException
 */
export class LicensedUrlGetAction extends KalturaRequest<KalturaLicensedUrl> {

    request : KalturaLicensedUrlBaseRequest;

    constructor(data : LicensedUrlGetActionArgs)
    {
        super(data, {responseType : 'o', responseSubType : 'KalturaLicensedUrl', responseConstructor : KalturaLicensedUrl  });
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'licensedurl' },
				action : { type : 'c', default : 'get' },
				request : { type : 'o', subTypeConstructor : KalturaLicensedUrlBaseRequest, subType : 'KalturaLicensedUrlBaseRequest' }
            }
        );
        return result;
    }
}

