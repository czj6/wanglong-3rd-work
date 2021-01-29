import React, { Component } from 'react'
import axios from 'axios'
import Mock from 'mockjs'
import './index.css'
import { Button,Form,Input,Select, Radio,Modal } from 'antd';
import { nanoid } from 'nanoid'
const { Option } = Select;
const Random=Mock.Random;
export default class MainCreate extends Component {
  formRef = React.createRef();
  state = {
    loading: false,
    visible: false,
    obj: {}
  };
  onFinish = (values) => {
      let obj = {
      ...values,
      id: nanoid(6),
      "classTeacher": Random.cname(2,3),
    }
    let teachers = this.mockData(Random.integer(1,10),1)
    let students = this.mockData(Random.integer(1,10),2)
    let parents = this.mockData(Random.integer(1,10),3)
    obj = {
      ...obj,
      teachers,
      students,
      parents
    }
    this.setState({obj})
    this.showModal()
  };
  // n表示数据的多少，t： 1表示老师 2表示学生 3表示家长
  mockData = (n,t) => {
    let arr = [],person = {},subject = ["英语老师","语文老师","数学老师","生物老师","地理老师","历史老师","政治老师"];
    for(let i = 0; i < n; i++){
      person.name = Random.cname(2,3);
      person.id = nanoid(6);
      person.picture = '/public/img/photo.png'
      if(t===1){
        person.tags = subject[Random.integer(0,6)]
      }
      arr.push(person)
      person = {}
    }
    return arr
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = async() => {
    this.setState({ loading: true });
    await this.postData(this.state.obj)
    this.formRef.current.resetFields();
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 2000);
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };
  goback = ()=>{
    this.props.history.goBack()
  }
  postData = (data)=>{
    axios({
      method: "post",
      url: "http://localhost:3000/api1/class",
      data
    }).then((data)=>{
      console.log(data);
    })
  }
  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
    };
    const tailLayout = {
      wrapperCol: {
        offset: 8,
        span: 16,
      },
    };
    const { visible, loading } = this.state;
    return (
      <div className="main">
        <div className="main_head">
          <p>我的班级</p>
          <button className="btn btn-primary create_btn" onClick={this.goback}>返回上一级</button>
        </div>
        <div className="main_body">
          <p className="main_body_title">尊敬的老师(刘老师)，请填写班级信息:
          </p>
          
           <Form ref={this.formRef} {...formItemLayout} onFinish={this.onFinish}>
            <Form.Item
              {...formItemLayout}
                name="school"
                label="学校"
                rules={[
                  {
                    required: true,
                    message: '学校不能为空',
                  },
                ]}
              >
              <Input placeholder="请填写好学校" />
            </Form.Item>
            
            <Form.Item
              name="stage"
              label="学段"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="选择学段"
                
                allowClear
              >
                <Option value="小学">小学</Option>
                <Option value="初中">初中</Option>
                <Option value="高中">高中</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="grade"
              label="年级"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="请选择年级"
                
                allowClear
              >
                <Option value="一年级">一年级</Option>
                <Option value="二年级">二年级</Option>
                <Option value="三年级">三年级</Option>
              </Select>
            </Form.Item>

            <Form.Item
              {...formItemLayout}
                name="className"
                label="班级名"
                rules={[
                  {
                    required: true,
                    message: '班级名不能为空',
                  },
                ]}
              >
              <Input placeholder="请输入班级名称" />
            </Form.Item>
            <Form.Item name="type" label="类型">
              <Radio.Group>
                <Radio value="1">行政班</Radio>
                <Radio value="2">教学班</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item name="authority" label="退出权限设置">
              <Radio.Group>
                <Radio value="1">允许退出</Radio>
                <Radio value="2">通过班级管理员审核后退出</Radio>
                <Radio value="3">禁止退出</Radio>
                {/* 1 表示允许退出    2 表示通过班级管理员审核后退出   3表示禁止退出 */}
              </Radio.Group>
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
            </Form.Item>
           </Form>
        </div>
        <Modal
          visible={visible}
          title="请求确认"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              取消
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              确定
            </Button>,
          ]}
        >
          <p>您确定要创建这个班级吗</p>
        </Modal>
      </div>
    )
  }
}
