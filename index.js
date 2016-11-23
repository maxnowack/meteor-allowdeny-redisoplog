import { CollectionExtensions } from 'meteor/lai:collection-extensions'
import validatedInsert from './validatedInsert'
import validatedUpdate from './validatedUpdate'
import validatedRemove from './validatedRemove'

CollectionExtensions.addExtension(function extendProto() {
  this._validatedInsert = validatedInsert
  this._validatedUpdate = validatedUpdate
  this._validatedRemove = validatedRemove
})
