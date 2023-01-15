import gpt_2_simple as gpt2

gpt2.download_gpt2(model_name='124M')
sess = gpt2.start_tf_sess()
gpt2.finetune(
    sess,
    model_name='124M',
    dataset='finetune_generated.txt',
    steps=10,
    restore_from='fresh',
    run_name='finetuned',
    print_every=1,
    sample_every=1,
    save_every=5
)