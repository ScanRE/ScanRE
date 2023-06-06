<h1 align="center">ScanRE</h1>
<p align="center">
![image](https://github.com/SaketThota/mh-hacks/assets/52862591/0dee415d-14ec-4443-858c-ec2550ac04d5)
</p>

## What is Static Code Analysis?

Static analysis is a method of debugging that is done by automatically examining the source code without having to execute the program. This provides developers with an understanding of their code base and helps ensure that it is compliant, safe, and secure. To find defects and violations of policies, checkers perform an analysis on the code.

![image](https://user-images.githubusercontent.com/52862591/234088790-64ded29a-f35e-4b25-a862-c59dced2fd71.png)

They operate by querying or traversing the model, looking for particular properties or patterns that indicate defects. Sophisticated symbolic execution techniques explore paths through a control-flow graph. The data structure representing paths that might be traversed by a program during its execution. A warning is generated, if the path exploration notices an anomaly.

To model and explore the astronomical number of combinations of circumstances, scanners employ a variety of strategies to ensure scalability. For example, procedures summaries are refined and compacted during the analysis, and paths are explored in an order that minimizes paging. 


## Architecture:

A high level layout of our system is shown below.



We've made extensive use of docker and celery to ensure that we are able to tackle the asynchronous nature of our task, i.e. scanning multiple files of code, each having different sizes across multiple repositories. A high level architecture of celery is shown below.




## What was our motivation?
To help improve the security posture of open sourced software in the industry.

![image](https://user-images.githubusercontent.com/52862591/234079995-43c5a83b-a1cc-420b-838c-1f0e86343d93.png)


## Metrics:
Since the underlying system is primarily built on top of SemGrep, our performance is mainly determined by the performance of SemGrep. Semgrep is able to outperform GitGuardian and other code analysis tools, both, in terms of time taken and false positives flagged.

![image](https://user-images.githubusercontent.com/52862591/234083312-6bc6cec7-0312-45ef-ab36-a55b3f381efd.png)

Tree matching has a nearly negligible cost when compared to most deep program analysis techniques, such as pointer analysis or symbolic execution, so this was clearly a winning battle. As Semgrep grew more advanced, more features were added which caused it to err closer to the side of semantics, such as taint analysis and constant propagation.

These analyses are not necessarily ones that can be done quickly. Taint analysis, in particular, requires running dataflow analysis over the entire control flow of a program, which can potentially be huge, when considering how large an entire codebase may be, with all of its function calls and tricky control flow logic. To do taint analysis in this way would be to pick a losing battle.

Semgrep succeeds in that it only carries out single-file analysis, so the control flow graph never exceeds the size of a file. In addition, taint can be done incrementally. Functions have well-defined points where they begin and end, as well as generally well-defined entrances in terms of the data they accept (the function arguments). Thus, Semgrep collects taint summaries, which essentially (per function) encode the information about what taint may be possible, depending on the taint of the inputs that flow in.
![image](https://user-images.githubusercontent.com/52862591/234083232-4af327b3-5f37-4611-af16-237a73a128d6.png)

## References:

* https://nullcon.net/goa-2022/hack-the-source
* https://nullcon.net/goa-2022/unearthing-malicious-and-other-risky-open-source-packages-using-packj
* https://nullcon.net/goa-2022/raining-CVEs-on-wordpress-plugins-with-semgrep
* https://semgrep.dev/blog/2022/static-analysis-speed
