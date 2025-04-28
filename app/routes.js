// External dependencies
const express = require('express');

const router = express.Router();

router.post('/contract-amount', function (req, res) {

    var contractAmount = req.session.data.contractAmount

    if (contractAmount == "One"){

      res.redirect('/contract-management/foundation-dentist/one-contract-one-trainer/find-contract')
    } else {

      res.redirect('/contract-management/foundation-dentist/many-contracts-many-trainers/find-contract-1')
    }
  })

  router.post('/many-contract-funding-split', function (req, res) {

    var manyFundingSplit = req.session.data.manyFundingSplit

    if (manyFundingSplit == "Shared equally (50:50)"){

      res.redirect('/contract-management/foundation-dentist/many-contracts-many-trainers/prefilled-funding-split')
    } else {
  
      res.redirect('/contract-management/foundation-dentist/many-contracts-many-trainers/input-funding-split')
    }
  })

  router.post('/121-choose-trainers', function (req, res) {

    var oneChooseTrainers = req.session.data.oneChooseTrainers

    if (Array.isArray(oneChooseTrainers) && oneChooseTrainers.length > 1){

      res.redirect('/contract-management/foundation-dentist/one-contract-many-trainers/trainers-dates')
    } else {
   
      res.redirect('/contract-management/foundation-dentist/one-contract-one-trainer/confirm-funding')
    }
  })

  router.post('/1-many-funding-split', function (req, res) {

    var oneManyFundingSplit = req.session.data.oneManyFundingSplit

    if (oneManyFundingSplit == "Shared equally (50:50)"){

      res.redirect('/contract-management/foundation-dentist/one-contract-many-trainers/confirm-equal-funding')
    } else {

      res.redirect('/contract-management/foundation-dentist/one-contract-many-trainers/input-funding-split')
    }
  })

  router.post('/find-contract', function (req, res) {

    res.redirect('/contract-management/foundation-dentist/one-contract-one-trainer/contract-dates')
  })

  router.post('/close-contract-approval', function (req, res) {

    var reviewDecision = req.session.data.reviewDecision

    if (reviewDecision == "Approve"){

      res.redirect('/contract-management/close-contract/review/request-approved')
    } else {

      res.redirect('/contract-management/close-contract/review/rejection-reason')
    }
  })

  router.post('/transfer-date', function (req, res) {

    var transferDate = req.session.data.transferDate

    var currentDate = new Date()

    if (transferDate < currentDate){

      res.redirect('/contract-management/transfer-contract/retrospective-date')
    } else {

      res.redirect('/contract-management/transfer-contract/transfer-reason')
    }
  })

  router.post('/retrospective-date', function (req, res) {

    var retrospectiveDate = req.session.data.retrospectiveDate

    if (retrospectiveDate == "yes"){

      res.redirect('/contract-management/transfer-contract/transfer-reason')
    } else {

      res.redirect('/contract-management/transfer-contract/transfer-date')
    }
  })
  router.post('/transfer-contract-approval', function (req, res) {

    var reviewDecision = req.session.data.reviewDecision

    if (reviewDecision == "Approve"){

      res.redirect('/contract-management/transfer-contract/review/request-approved')
    } else {

      res.redirect('/contract-management/transfer-contract/review/rejection-reason')
    }
  })
  router.post('/close-contract-date', function (req, res) {

    var closeContractDate = req.session.data.closeContractDate

    var currentDate = new Date()
    console.log(currentDate)

    if (closeContractDate > currentDate ){

      res.redirect('/contract-management/transfer-contract/review/request-approved')
    } else {

      res.redirect('/contract-management/transfer-contract/review/rejection-reason')
    }
  })
  router.post('/close-requestor', function (req, res) {

    var closeRequestor = req.session.data.closeRequestor

    if (closeRequestor == "Commissioner" ){

      res.redirect('/contract-management/close-contract/commissioner-termination')
    } else {

      res.redirect('/contract-management/close-contract/provider-termination')
    }
  })
  router.post('/is-ap-deliverable', function (req, res) {

    var isApDeliverable = req.session.data.isApDeliverable

    if (isApDeliverable == "Yes" ){

      res.redirect('/pad-comments/commissioner-view/action-plan-deliverable/delivery-details')
    } else {

      res.redirect('/pad-comments/commissioner-view/action-plan-not-deliverable/before-you-start')
    }
  })
  router.post('/nil-return-meeting', function (req, res) {
    const nilReturnMeeting = req.session.data.confirm
  
    switch (nilReturnMeeting) {
      case "yes":
        res.redirect('/pad-comments/commissioner-view/nil-returns/under-performance-reasons')
        break
      case "not-met":
        res.redirect('/pad-comments/commissioner-view/nil-returns/return-after-meeting')
        break
      case "no-response":
        res.redirect('/pad-comments/commissioner-view/nil-returns/remedial-notice')
        break
      case "not-needed":
        res.redirect('/pad-comments/commissioner-view/nil-returns/under-performance-reasons')
        break
    }
  })
  router.post('/nil-return-remedial-notice', function (req, res) {

    var nilReturnRemedialNotice = req.session.data.nilReturnRemedialNotice

    if (nilReturnRemedialNotice == "Yes" ){

      res.redirect('/pad-comments/commissioner-view/nil-returns/remedial-notice-sent')
    } else {

      res.redirect('/pad-comments/commissioner-view/nil-returns/is-contract-deliverable')
    }
  })
  router.post('/nil-return-outcome', function (req, res) {
    const nilReturnOutcome = req.session.data.confirm
  
    switch (nilReturnOutcome) {
      case "nr-no-further-action":
        res.redirect('/pad-comments/commissioner-view/nil-returns/additional-comments')
        break
      case "nr-early-repayment-scheme":
        res.redirect('/pad-comments/commissioner-view/nil-returns/all-adjustments')
        break
      case "non-recurrent":
        res.redirect('/pad-comments/commissioner-view/nil-returns/all-adjustments')
        break
      case "rebase":
        res.redirect('/pad-comments/commissioner-view/nil-returns/rebase')
        break
      case "withhold":
        res.redirect('/pad-comments/commissioner-view/nil-returns/withhold')
        break
      case "other":
        res.redirect('/pad-comments/commissioner-view/nil-returns/all-adjustments')
        break
    }
  })
  router.post('/rebase', function (req, res) {

    var rebase = req.session.data.rebase

    if (rebase == "Yes" ){

      res.redirect('/pad-comments/commissioner-view/nil-returns/unilateral-rebase')
    } else {

      res.redirect('/pad-comments/commissioner-view/nil-returns/all-adjustments')
    }
  })
// Add your routes here - above the module.exports line

module.exports = router;
