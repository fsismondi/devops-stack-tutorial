module "cluster" {
  source       = "git::https://github.com/camptocamp/devops-stack.git//modules/k3s/docker?ref=v0.32.0"
  cluster_name = "devops-stack-cluster"
}
