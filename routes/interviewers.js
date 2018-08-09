var express = require('express');
var router = express.Router();

/* List all interviews */
router.get('/', async (req, res, next) => {
    req.sql("select * from interviewers for json path").into(res);

});


// /* Create interviews */
// router.post('/', async (req, res, next) => {
//     req.sql("Insert into interviewers(candidate_fullname, position_apply, recruiter , eng_level ,eng_level_cmt, jury_round1_01, jury_round1_02, date_round1, tech_competency_round1, tech_competency_round1_cmt, cultural_fit_round1, cultural_fit_round1_cmt, ype_round1, title_round1, round1_status, cmt_result_roudn1, jury_round2, date_round2, tech_competency_round2, tech_competency_round2_cmt, cultural_fit_round2, cultural_fit_round2_cmt, business_acument , business_acument_cmt , soft_skill, soft_skill_cmt,people_management, people_management_cmt, ype_round2, title_round2 , round2_status, cmt_result_round2)").into(res);
// });

/* List One */
router.get('/:candidate_id', async (req, res, next) => {
    console.log(req.params.candidate_id);
    // req.sql("select * from interviewers where candidate_id = 1 for json path")
    // .param('candidate_id', req.params.candidate_id,)
    // .into(res);
    await req.sql("select * from interviewers for json path").into(res);
});

/* GET product by id. */
// router.get('/:id', function (req, res) {

//     req.sql("select * from Product where id = @id for json path, without_array_wrapper")
//         .param('id', req.params.id, TYPES.Int)
//         .into(res, '{}');

// });


/* %^^^^^^% */
module.exports = router;